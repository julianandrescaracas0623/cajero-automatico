import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer";

const MenuPrincipal = () => {
  const navigate = useNavigate();

  const handSaldosClick = () => {
    navigate("/main_menu/balances");
  };

  const handWithdrawBalancesClick = () => {
    navigate("/main_menu/withdraw-balances");
  };
  
  const handDepositBalancesClick = () => {
    navigate("/main_menu/deposit-balance");
  };

  const cardData = [
    {
      title: "Mostrar Saldo",
      image: "./img/mostrarSaldo.webp",
      link: handSaldosClick,
    },
    {
      title: "Retirar Saldo",
      image: "./img/retirarSaldo.webp",
      link: handWithdrawBalancesClick,
    },
    {
      title: "Consignar Saldo",
      image: "./img/consignarSaldo.webp",
      link: handDepositBalancesClick,
    },
  ];

  return (
    <motion.div
      className="flex flex-col h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center bg-white p-4">
        <img
          src="./img/logo-bancolombia.webp"
          alt="Company Logo"
          className="h-40 w-auto"
        />
      </div>
      {/* Main Content with Centered Cards */}
      <div className="flex flex-col items-center w-full p-8 space-y-6 flex-grow">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default MenuPrincipal;
