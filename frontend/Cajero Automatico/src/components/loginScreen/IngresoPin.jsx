import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const IngresoPin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", ""]);

  //Funcion para crear un nuevo al momento de hacer click se crea un nuevo numero
  const handleButtonClick = digitar => {
    const newPin = [...pin];
    const emptyIndex = newPin.indexOf("");
    if (emptyIndex !== -1) {
      newPin[emptyIndex] = digitar;
      setPin(newPin);
    }
  };

  //Funcion para borrar  cuando hace click en el boton de borrar
  const handleDeleteClick = () => {
    const newPin = [...pin];
    const ultimaPosicion = newPin
      .map((digit, i) => (digit !== "" ? i : -1))
      .filter(i => i !== -1)
      .pop();

    if (ultimaPosicion !== undefined) {
      newPin[ultimaPosicion] = "";
      setPin(newPin);
    }
  };
  const handleMainClick = () => {
    navigate("/main_menu");
  };

  return (
    <>
      <motion.div
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-8 ">
          <img
            src="./img/logo-bancolombia.webp"
            alt="Logo de la Empresa"
            className="h-20 w-auto"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Ingresa tu PIN</h2>
          <p className="text-gray-600">Ingresa un PIN de 4 dígitos</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {pin.map((digit, i) => (
              <motion.input
                key={i}
                type="text"
                value={digit}
                readOnly
                className="h-16 w-16 rounded-lg border border-gray-900 bg-gray-100 text-center text-2xl font-bold transition-all duration-300 ease-in-out focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 "
                initial={{ opacity: 1 }}
                animate={{ opacity: digit === "" ? 0.5 : 1 }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                onClick={() => handleButtonClick(num)}
                className="h-16 w-full rounded-lg border border-white-700 bg-gray-100 text-center text-2xl font-bold transition-all duration-300 ease-in-out focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
              >
                {num}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center h-16 w-full">
            <button
              onClick={() => handleButtonClick(0)}
              className="h-16 w-full rounded-lg border border-white-700 bg-gray-100 text-center text-2xl font-bold transition-all duration-300 ease-in-out focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            >
              0
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDeleteClick}
              className="h-16 w-full rounded-lg border border-gray-300 bg-red-500 text-white text-center text-2xl font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Borrar
            </button>
            <button
              className="h-16 w-full rounded-lg border border-white bg-yellow-500 text-white text-center text-2xl font-bold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={handleMainClick}
            >
              Ingresar
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default IngresoPin;
