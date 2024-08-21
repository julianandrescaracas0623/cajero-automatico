import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Footer from "../Footer";
import ModalAgregarOtroSaldo from "../cajeroAutomatico/ModalAgregarOtroSaldo";
import { useNavigate } from "react-router-dom";
import MensajeError from "../message/MensajeError";
import { Global } from "../../helpers/Global";

const RetirarSaldo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Estado para almacenar la información de la cuenta
  const [account, setAccount] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const userStore = JSON.parse(localStorage.getItem("usuario"));

  const handSaldo20milClick = () => {
    navigate("/main_menu/retired-balances", {
      state: { amount: 20000 },
    });
  };
  const handSaldos50milClick = () => {
    navigate("/main_menu/retired-balances", {
      state: { amount: 50000 },
    });
  };
  const handSaldos100milClick = () => {
    navigate("/main_menu/retired-balances", {
      state: { amount: 100000 },
    });
  };
  const handSaldos100millonClick = () => {
    navigate("/main_menu/retired-balances", {
      state: { amount: 1000000 },
    });
  };
  const cardData = [
    {
      title: "$20.000",
      image: "../../../public/img/20mil.jpg",
      link: handSaldo20milClick,
    },
    {
      title: "$50.000",
      image: "../../../public/img/50mil.jpg",
      link: handSaldos50milClick,
    },
    {
      title: "$100.000",
      image: "../../../public/img/100mil.webp",
      link: handSaldos100milClick,
    },
    {
      title: "$1.000.000",
      image: "../../../public/img/100.000.000mil.webp",
      link: handSaldos100millonClick,
    },
  ];

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

  // useEffect para llamar a accountNumber cuando el componente se monta
  useEffect(() => {
    accountNumber();
  }, []);

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
