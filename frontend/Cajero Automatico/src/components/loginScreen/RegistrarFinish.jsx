import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import paisaje from "../../../public/img/bancoInversion.webp";
import Footer from "../Footer";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import MensajeError from "../../components/message/MensajeError";
import MensajeExitoso from "../../components/message/MensajeExitoso";

const RegistrarFinish = () => {
  const { form, cambiar } = HelperForm({});
  const location = useLocation();
  const formData = location.state.formData;
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const newRegister = async (e) => {
    e.preventDefault();

    // Validación del número PIN de 4 dígitos
    if (form.numeroPin.length !== 4) {
      MensajeError({
        title: "Error",
        message: "El número PIN debe ser de 4 dígitos.",
      });
      return; // Detenemos el envío del formulario
    }

    const dataToSend = {
      ...formData,
      numeroTelefono: form.numeroTelefono,
      correo: form.correo,
      nombre: form.nombre,
      numeroPin: form.numeroPin,
    };

    try {
      const response = await fetch(`${Global.url}users/create`, {
        body: JSON.stringify(dataToSend),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!data.status) {
        MensajeError({ title: data.title, message: data.message });
      } else {
        navigate("/");
        MensajeExitoso({ title: data.title, message: data.message });
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  return (
    <>
      <motion.div
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-grow">
          {/* Columna izquierda: Formulario de Login */}
          <div className="w-full max-w-lg bg-white p-10 flex flex-col justify-center shadow-lg rounded-lg lg:rounded-none">
            {/* Logo de la empresa */}
            <div className="flex justify-center mb-8">
              <img
                src="../../public/img/logo-bancolombia.webp"
                alt="Logo de la Empresa"
                className="h-30 w-auto"
              />
            </div>

            {/* Título y descripción */}
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gray-800">
                Finalizar registro
              </h2>
              <p className="text-gray-500">
                Revisa tus datos y finaliza el registro
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={newRegister}>
              <div className="space-y-6">
                <input
                  id="number"
                  name="numeroTelefono"
                  type="number"
                  placeholder="Número de telefono"
                  required
                  onChange={cambiar}
                  className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
                />

                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="Correo"
                  required
                  className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
                  onChange={cambiar}
                />

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre Completo"
                  required
                  className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
                  onChange={cambiar}
                />

                <input
                  id="numeroPin"
                  name="numeroPin"
                  type="number"
                  placeholder="Número Pin"
                  onChange={cambiar}
                  required
                  className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
                />

                <div className="flex gap-2">
                  <motion.button
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                    onClick={handleRegisterClick}
                    initial={{ opacity: 1 }}
                    whileTap={{ opacity: 0.6 }}
                  >
                    Regresar
                  </motion.button>
                  <motion.button
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                    initial={{ opacity: 1 }}
                    whileTap={{ opacity: 0.6 }}
                  >
                    Confirmar
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
          {/* Columna derecha: Imagen */}
          <div className="hidden lg:flex w-full items-center justify-center">
            <img src={paisaje} alt="Imagen Descriptiva" className="h-30" />
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default RegistrarFinish;
