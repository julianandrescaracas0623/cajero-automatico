import { useState } from "react";
import SupersistivePoints from "../../icons/SupersistivePoints";
import HoraActual from "./HoraActual";

const ChatMessage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-start gap-4">
      {" "}
      {/* Aumentar el espacio entre los elementos */}
      <img
        className="w-12 h-12 rounded-full border-2 border-black"
        src="../../../public/img/logo.webp"
        alt="Jese image"
      />
      <div className="flex flex-col w-full max-w-[400px] leading-1.5 p-6 border-2 border-black bg-gray-100 rounded-xl">
        {" "}
        {/* Ampliar el contenedor del mensaje */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {" "}
          {/* Ampliar el espacio entre el nombre y la hora */}
          <span className="text-lg font-semibold text-gray-900">
            {" "}
            {/* Aumentar el tamaño del texto */}
            Asesor Colombiano
          </span>
          <HoraActual />
        </div>
        <p className="text-base font-normal py-3 text-gray-900">
          {" "}
          {/* Aumentar el tamaño del texto */}
          That's awesome. I think our users will really appreciate the
          improvements.
        </p>
        <span className="text-sm font-normal text-gray-500">Delivered</span>
      </div>
      <button
        onClick={toggleMenu}
        className="inline-flex self-center items-center p-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none"
        type="button"
      >
        <SupersistivePoints />
      </button>
      {isMenuOpen && (
        <div className="z-10 border-2 border-black bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48">
          {" "}
          {/* Ampliar el tamaño del menú desplegable */}
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Reporte
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
