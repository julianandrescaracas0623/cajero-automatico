import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import formatoPesos from "../funciones/formatoPesos";
import { useNavigate } from "react-router-dom";

const ModalAgregarOtroSaldo = ({ onClose }) => {
  const [saldo, setSaldo] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    // Elimina el formato antes de actualizar el estado
    const unformattedValue = value.replace(/[^\d]/g, "");
    setSaldo(formatoPesos(unformattedValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navega a la nueva ruta con el valor del saldo
    navigate("/main_menu/retired-balances", {
      state: { amount: saldo.replace(/[^\d]/g, "") },
    });
  };

  return (
    <>
      <motion.div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative p-4 w-full max-w-sm md:max-w-md lg:max-w-lg max-h-full bg-white rounded-lg shadow"
          initial={{ y: "-50%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "50%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Agregar Saldo
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="saldo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Monto de Saldo
                </label>
                <input
                  type="text"
                  name="saldo"
                  id="saldo"
                  placeholder="Ingrese el monto"
                  value={saldo}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                aria-label="Agregar saldo"
                className="w-full text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Agregar Saldo
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

ModalAgregarOtroSaldo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalAgregarOtroSaldo;
