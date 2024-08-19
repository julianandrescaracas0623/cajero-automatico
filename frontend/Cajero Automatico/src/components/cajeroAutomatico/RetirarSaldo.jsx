import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card/Card";
import Footer from "../Footer";
import ModalAgregarOtroSaldo from "../cajeroAutomatico/ModalAgregarOtroSaldo";
import { useNavigate } from "react-router-dom";

const RetirarSaldo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handSaldosClick = () => {
    navigate("/main_menu/retired-balances");
  };

  const cardData = [
    {
      title: "$20.0000",
      image: "../../../public/img/20mil.jpg",
      link: handSaldosClick,
    },
    {
      title: "$50.000",
      image: "../../../public/img/50mil.jpg",
    },
    { title: "$100.000", image: "../../../public/img/100mil.webp" },
    { title: "$1.000.000", image: "../../../public/img/100.000.000mil.webp" },
  ];

  return (
    <>
      <motion.div
        className="flex flex-col h-screen bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center bg-white p-4">
          <img
            src="../../../public/img/logo-bancolombia.webp"
            alt="Company Logo"
            className="h-40 w-auto"
          />
        </div>
        {/* Información de la Persona */}
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Nombre de la Persona</p>
          <p className="text-sm text-gray-600">
            Tarjeta de Identificación: 123456789
          </p>
          <p className="text-sm text-gray-600">
            numero cuenta: 123456789
          </p>
        </div>
        {/* Main Content with Centered Cards */}
        <div className="flex flex-col items-center w-full p-8 space-y-6 flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                link={card.link}
                className="border border-black border-opacity-10 rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full p-8 mt-auto">
          <button
            onClick={openModal}
            className="text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
          >
            Agregar Saldo
          </button>
        </div>
        {isModalOpen && <ModalAgregarOtroSaldo onClose={closeModal} />}
        <Footer />
      </motion.div>
    </>
  );
};

export default RetirarSaldo;
