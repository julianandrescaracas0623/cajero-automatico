import MoveHorizontalIcon from "../../icons/MoveHorizontalIcon";
import UserIcon from "../../icons/UserIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatMessage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

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
          <div className="font-medium">Asistente Colombia</div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-3 text-sm border border-black"
            >
              <p>Fecha actual:</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
