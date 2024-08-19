import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MensajeError from "../message/MensajeError";
import MensajeExitoso from "../message/MensajeExitoso";
import { Global } from "../../helpers/Global";
import Header from "./Header";
import InfoCard from "./InfoCard";

const ChatMessage = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para almacenar la información de la cuenta
  const [account, setAccount] = useState(null);

  // Hook para obtener la ubicación actual (ruta) desde la URL
  const location = useLocation();
  const currentPath = location.pathname;
  const inputRetire = currentPath === "/main_menu/retired-balances";

  // Obtener datos del localStorage
  const trarLocalStore = JSON.parse(localStorage.getItem("usuario"));

  // Función para alternar la apertura/cierre del menú
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Función asíncrona para obtener la información de la cuenta desde la API
  const accountNumber = async () => {
    try {
      // Función asíncrona para obtener la información de la cuenta desde la API
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
      // Convertir la respuesta en formato JSON
      const data = await response.json();

      // Verificar el estado de la respuesta y mostrar mensajes de error o éxito
      if (!data.status) {
        MensajeError({
          title: data.title,
          message: data.message,
        });
      } else {
        MensajeExitoso({
          title: data.title,
          message: data.message,
        });
        setAccount(data); // Update account state
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  // useEffect para llamar a accountNumber cuando el componente se monta
  useEffect(() => {
    accountNumber();
  }, []);

  const saldo = account?.cuenta?.saldo;
  const formattedSaldo =
    saldo === undefined || saldo === null || saldo === 0
      ? "0"
      : saldo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
            <InfoCard
              key="document-type"
              title="Tipo de documento"
              content={trarLocalStore.user.tipoDocumento}
            />
            <InfoCard
              key="document-number"
              title="Número de documento"
              content={trarLocalStore.user.documento}
            />
            <InfoCard
              key="account-number"
              title="Numero Cuenta"
              content="11123213"
            />
            <InfoCard
              key="name"
              title="Nombre"
              content={trarLocalStore.user.nombre.toUpperCase()}
            />
            <InfoCard
              key="total-balance"
              title="Saldo total"
              content={`$${formattedSaldo}`}
            />
          </div>
          <InfoCard
            key="current-date"
            title="Fecha actual"
            content={new Date().toLocaleDateString()}
          />
          {inputRetire && (
            <>
              <InfoCard
                key="input-retire"
                title="Fecha Retiro"
                content="Detalles de retiro..."
              />
              <InfoCard
                key="input-retire"
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
