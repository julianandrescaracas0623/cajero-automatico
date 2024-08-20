import { motion } from "framer-motion";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { useNavigate } from "react-router-dom";
import MensajeError from "../message/MensajeError";
import MensajeDialog from "../message/MensajeDialog";
import HelperForm from "../../helpers/HelperForm";

const ConsignarSaldo = () => {
  // Estado para almacenar la información de la cuenta
  const [account, setAccount] = useState(null);
  const { form, cambiar } = HelperForm({});

  const userStore = JSON.parse(localStorage.getItem("usuario"));
  const navigate = useNavigate();

  // Función asíncrona para obtener la información de la cuenta desde la API
  const accountNumber = async () => {
    try {
      // Función asíncrona para obtener la información de la cuenta desde la API
      const response = await fetch(
        `${Global.url}account/${userStore.user.idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: userStore.token,
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
        setAccount(data);
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  const updateSaldos = async e => {
    e.preventDefault();

    try {
      const updateData = { ...form };
      console.log(updateData);

      const responsePut = await fetch(`${Global.url}account/update-accont`, {
        body: JSON.stringify(updateData),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: userStore.token,
        },
      });

      const data = await responsePut.json();
      console.log(data);
      if (!data.status) {
        MensajeError({
          title: data.title,
          message: data.message,
        });
      } else {
        await MensajeDialog({
          title: "¿Estás seguro de depositar?",
          text: "Si estás seguro de depositar, por favor verifica muy bien los datos.",
          titleDate: data.title,
          textDate: data.message,
        });
        navigate(`/main_menu/consign-deposit/${data.cuenta.idCuenta}`);
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

  return (
    <>
      <motion.div
        className="flex flex-col min-h-screen bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 shadow-md">
          <img
            src="../../../public/img/logo-bancolombia.webp"
            alt="Company Logo"
            className="h-16 md:h-24 lg:h-32 w-auto"
          />
        </div>

        {/* Información de la Persona */}
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">
            {userStore.user.nombre.toUpperCase()}
          </p>
          <p className="text-lg font-semibold">
            {`${userStore.user.tipoDocumento}: ${userStore.user.documento}`}
          </p>
          <p className="text-lg font-semibold">
            Numero Cuenta:{account?.cuenta[0]?.idCuenta}
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-5">
          <input
            id="idCuenta"
            name="idCuenta"
            onChange={cambiar}
            type="number"
            placeholder="Número de Cuenta"
            required
            className="w-1/3 p-4 border border-gray-300 rounded-lg focus:border-blue-400"
          />

          <input
            id="saldo"
            name="saldo"
            onChange={cambiar}
            type="number"
            placeholder="Número de Saldo"
            required
            className="w-1/3 p-4 border border-gray-300 rounded-lg focus:border-blue-400"
          />

          <button
            type="submit"
            onClick={updateSaldos}
            className="ml-auto p-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none"
          >
            Siguiente
          </button>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default ConsignarSaldo;
