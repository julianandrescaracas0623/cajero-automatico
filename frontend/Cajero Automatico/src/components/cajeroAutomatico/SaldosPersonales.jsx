import { motion } from "framer-motion";
import ChatMessage from "../Chat/Chat";

const SaldosPersonales = () => {
  return (
    <>
      <motion.div
        className="flex flex-col h-screen bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center bg-white p-4">
          <img
            src="../../../public/img/logo-bancolombia.webp"
            alt="Company Logo"
            className="h-24 md:h-32 lg:h-40 w-auto"
          />
        </div>
        <ChatMessage />
      </motion.div>
    </>
  );
};

export default SaldosPersonales;
