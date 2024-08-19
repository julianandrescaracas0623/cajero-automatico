import MoveHorizontalIcon from "../../icons/MoveHorizontalIcon";
import UserIcon from "../../icons/UserIcon";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MensajeError from "../message/MensajeError";
import { Global } from "../../helpers/Global";
import MensajeExitoso from "../message/MensajeExitoso";

const ChatMessage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accont, setAccont] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const inputRetire = currentPath === "/main_menu/retired-balances";

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleHomeClick = () => {
    navigate("/main_menu");
  };

  const accountNumber = async () => {
    const trarLocalStore = localStorage.getItem("usuario");

    try {
      const response = await fetch(
        `${Global.url}trasaccion/transacciones/${trarLocalStore.idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          Authorization: trarLocalStore.token,
        }
      );
      const date = await response.json();

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
      console.log(date);
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  useEffect(() => {
    accountNumber();
  }, []);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 bg-white border border-black shadow">
        <div className="w-8 h-8 border border-black rounded-full overflow-hidden">
          <img
            src="../../../public/img/logo.webp"
            alt="Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <div className="font-medium">Asistente Bancolombia</div>
          <div className="text-xs text-gray-500">Online</div>
        </div>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="rounded-full p-2 hover:bg-gray-200 focus:outline-none border border-black"
          >
            <MoveHorizontalIcon className="w-4 h-4" />
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="menu" // Añadir una clave única aquí
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 w-48 bg-white border border-black rounded shadow-lg"
              >
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    <UserIcon className="w-4 h-4 mr-2 inline-block" />
                    Reporte
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleHomeClick}
                  >
                    <UserIcon className="w-4 h-4 mr-2 inline-block" />
                    Salir
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4 border border-black">
          <AnimatePresence>
            {/* Mensaje de bienvenida */}
            <motion.div
              key="welcome-message" // Clave única para el mensaje de bienvenida
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-3 text-sm border border-black"
            >
              <p>Hola, soy tu asistente virtual. ¿Cómo puedo ayudarte hoy?</p>
            </motion.div>
            {/* Mensajes de información */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                key="document-type" // Clave única para el tipo de documento
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-3 text-sm border border-black"
              >
                <p>Tipo de documento:</p>
                <p className="font-medium">Cédula de ciudadanía</p>
              </motion.div>
              <motion.div
                key="document-number" // Clave única para el número de documento
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-3 text-sm border border-black"
              >
                <p>Número de documento:</p>
                <p className="font-medium">123456789</p>
              </motion.div>
              <motion.div
                key="document-type" // Clave única para el tipo de documento
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-3 text-sm border border-black"
              >
                <p>Numero Cuenta:</p>
                <p className="font-medium">11123213</p>
              </motion.div>
              <motion.div
                key="name" // Clave única para el nombre
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-3 text-sm border border-black"
              >
                <p>Nombre:</p>
                <p className="font-medium">Juan Pérez</p>
              </motion.div>
              <motion.div
                key="total-balance" // Clave única para el saldo total
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-3 text-sm border border-black"
              >
                <p>Saldo total:</p>
                <p className="font-medium">$1,234.56</p>
              </motion.div>
            </div>
            <motion.div
              key="current-date" // Clave única para la fecha actual
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-3 text-sm border border-black"
            >
              <p>Fecha actual:</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </motion.div>
            {inputRetire && (
              <>
                <motion.div
                  key="current-date" // Clave única para la fecha actual
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-3 text-sm border border-black"
                >
                  <p>Fecha Retiro:</p>
                  <p className="font-medium">
                    {new Date().toLocaleDateString()}
                  </p>
                </motion.div>
                <motion.div
                  key="current-date" // Clave única para la fecha actual
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-3 text-sm border border-black"
                >
                  <p>Saldo Retirado:</p>
                  <p className="font-medium">$10.000</p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
