import { motion } from "framer-motion";
import ChatMessage from "../Chat/Chat";
import Footer from "../Footer";

const SaldosPersonales = () => {
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
      </div>
      <Footer />
    </motion.div>
  );
};

export default SaldosPersonales;
