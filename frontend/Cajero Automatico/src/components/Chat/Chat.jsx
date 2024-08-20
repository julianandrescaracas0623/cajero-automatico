import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MensajeError from "../message/MensajeError";
import { Global } from "../../helpers/Global";
import Header from "./Header";
import InfoCard from "./InfoCard";

const ChatMessage = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para almacenar la información de la cuenta
  const [accountDetails, setAccountDetails] = useState(null);
  const [accountNumberDetails, setAccountNumberDetails] = useState(null);

  // Hook para obtener la ubicación actual (ruta) desde la URL
  const location = useLocation();
  const currentPath = location.pathname;

  // Obtener datos del localStorage
  const trarLocalStore = JSON.parse(localStorage.getItem("usuario"));

  // Función para alternar la apertura/cierre del menú
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Función para formatear el saldo
  const formatSaldo = saldo =>
    saldo?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") || "0";

  // Función asíncrona para obtener la información de la cuenta desde la API
  const fetchAccountDetails = async () => {
    try {
      const response = await fetch(
        `${Global.url}account/${trarLocalStore.user.idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: trarLocalStore.token,
          },
        }
      );
      const data = await response.json();

      if (!data.status) {
        MensajeError({
          title: data.title,
          message: data.message,
        });
      } else {
        setAccountDetails(data);
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  // Función asíncrona para obtener la información de la cuenta con base en el ID de la ruta
  const fetchAccountNumberDetails = async () => {
    try {
      const accountId = currentPath.split("/").pop();
      const response = await fetch(
        `${Global.url}account/verefy-accont/${accountId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: trarLocalStore.token,
          },
        }
      );
      const data = await response.json();

      if (!data.status) {
        MensajeError({
          title: data.title,
          message: data.message,
        });
      } else {
        setAccountNumberDetails(data);
      }
      console.log(data);
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  // useEffect para llamar a las funciones de obtención de datos según la ruta actual
  useEffect(() => {
    if (
      currentPath === "/main_menu/balances" ||
      currentPath === "/main_menu/retired-balances"
    ) {
      fetchAccountDetails();
    } else if (currentPath.includes("/main_menu/")) {
      fetchAccountNumberDetails();
    }
  }, [currentPath]);

  // Datos de la cuenta a mostrar según la ruta actual
  const accountInfo = accountDetails
    ? [
        {
          title: "Tipo de documento",
          content: trarLocalStore.user.tipoDocumento,
        },
        {
          title: "Número de documento",
          content: trarLocalStore.user.documento,
        },
        {
          title: "Número Cuenta",
          content: accountDetails?.cuenta[0]?.idCuenta,
        },
        { title: "Nombre", content: trarLocalStore.user.nombre.toUpperCase() },
        {
          title: "Saldo total",
          content: `$${formatSaldo(accountDetails?.cuenta[0]?.saldo)}`,
        },
      ]
    : [];

  const accountNumberInfo = accountNumberDetails
    ? [
        {
          title: "Tipo de documento",
          content: accountNumberDetails?.cuenta.tipoDocumento,
        },
        {
          title: "Número de documento",
          content: accountNumberDetails?.cuenta?.documento,
        },
        {
          title: "Número Cuenta",
          content: accountNumberDetails?.cuenta?.idCuenta,
        },
        {
          title: "Nombre",
          content: accountNumberDetails?.cuenta?.nombre.toUpperCase(),
        },
        {
          title: "Saldo total",
          content: `$${formatSaldo(accountNumberDetails?.cuenta?.saldo)}`,
        },
        {
          title: "Monto consignado",
          content: `$${formatSaldo(accountNumberDetails?.cuenta?.monto)}`,
        },
      ]
    : [];

  // Determinar qué información mostrar según la ruta actual
  const infoToShow =
    currentPath === "/main_menu/balances" ||
    currentPath === "/main_menu/retired-balances"
      ? accountInfo
      : accountNumberInfo;

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 text-gray-900">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4 border border-black">
          <InfoCard
            key="welcome-message"
            title="Hola, soy tu asistente virtual. ¿Cómo puedo ayudarte hoy?"
            content=""
          />
          <div className="grid grid-cols-2 gap-4">
            {infoToShow.map((info, index) => (
              <InfoCard
                key={index} // Usa un índice o una clave única adecuada
                title={info.title}
                content={info.content}
              />
            ))}
          </div>
          <InfoCard
            key="current-date"
            title="Fecha actual"
            content={new Date().toLocaleDateString()}
          />
          {currentPath === "/main_menu/retired-balances" && (
            <>
              <InfoCard
                key="input-retire"
                title="Fecha Retiro"
                content="Detalles de retiro..."
              />
              <InfoCard
                key="input-retire-saldo"
                title="Saldo Retiro"
                content="Detalles de retiro..."
              />
              <button className="mt-2 w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600">
                Realizar Retiro
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
