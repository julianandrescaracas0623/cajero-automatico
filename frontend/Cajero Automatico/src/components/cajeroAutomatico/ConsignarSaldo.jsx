import { motion } from "framer-motion";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import MensajeError from "../message/MensajeError";
import MensajeExitoso from "../message/MensajeExitoso";
import HelperForm from "../../helpers/HelperForm";

const ConsignarSaldo = () => {
  // Estado para almacenar la información de la cuenta
  const [account, setAccount] = useState(null);
  const { form, cambiar } = HelperForm({});

  const userStore = JSON.parse(localStorage.getItem("usuario"));

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
        setAccount(data); // Update account state
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  const UpdateSaldos = async e => {
    try {
      e.preventDefault();

      const updateCount = { ...form };
      console.log(updateCount);
      // Función asíncrona para obtener la información de la cuenta desde la API
      const responsePut = await fetch(`${Global.url}account/update-accont`, {
        body: updateCount,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: userStore.token,
        },
      });

      // Convertir la respuesta en formato JSON
      const date = await responsePut.json();

      // Verificar el estado de la respuesta y mostrar mensajes de error o éxito
      if (!date.status) {
        MensajeError({
          title: date.title,
          message: date.message,
        });
      } else {
        MensajeExitoso({
          title: date.title,
          message: date.message,
        });
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
          <p className="text-sm text-gray-600">
            {`${userStore.user.tipoDocumento}: ${userStore.user.documento}`}
          </p>
          <p className="text-sm text-gray-600">
            Numero Cuenta:{account?.cuenta[0]?.idCuenta}
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-5">
          <input
            id="idCuenta "
            name="idCuenta "
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
            onClick={UpdateSaldos}
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
