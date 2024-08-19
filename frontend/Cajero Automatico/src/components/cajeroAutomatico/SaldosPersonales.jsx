import { motion } from "framer-motion";
import ChatMessage from "../Chat/Chat";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const SaldosPersonales = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determinar si se debe mostrar el botón 'Siguiente'
  const showNextButton = currentPath === "/main_menu/retired-balances";

  return (
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
     
      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        <ChatMessage />

        {showNextButton && (
          <>
            <button
              type="button"
              className="mt-2 -mt-80 w-full max-w-sm text-gray-900 bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Siguiente
            </button>
          </>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default SaldosPersonales;
