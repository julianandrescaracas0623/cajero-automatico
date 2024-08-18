import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import paisaje from "../../../public/img/paisaje.svg";
import Footer from "../Footer";
import HelperForm from "../../helpers/HelperForm";
import MensajeError from "../../components/message/MensajeError";
import { Global } from "../../helpers/Global";

const LoginScreen = () => {
  const { form, cambiar } = HelperForm({});

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handlePinEntryClick = async e => {
    e.preventDefault();

    const loginInicial = { ...form };
    try {
      const response = await fetch(`${Global.url}users/home/validate-home`, {
        body: JSON.stringify(loginInicial),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!data.status) {
        MensajeError({ title: data.title, message: data.message });
      } else {
        navigate("/pinentry", {
          state: {
            formData: loginInicial,
          },
        });
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
    }
  };

  return (
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
            <h2 className="text-4xl font-bold text-gray-800">Bienvenido</h2>
            <p className="text-gray-500">
              Inicia sesión o regístrate para continuar
            </p>
          </div>

          {/* Formulario */}
          <div className="space-y-6">
            <div className="space-y-2">
              <select
                id="selection"
                name="tipoDocumento"
                required
                onChange={cambiar}
                placeholder="Número de documento"
                className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
              >
                <option>Selecciona un documento</option>
                <option>Cédula de Ciudadanía</option>
                <option>Tarjeta de Identidad</option>
              </select>
            </div>
            <input
              id="number"
              name="documento"
              onChange={cambiar}
              type="number"
              placeholder="Número de documento"
              required
              className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
            />
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-4 mt-8">
            <motion.button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
              onClick={handlePinEntryClick}
              initial={{ opacity: 1 }}
              whileTap={{ opacity: 0.6 }}
            >
              Iniciar sesión
            </motion.button>

            <motion.button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
              onClick={handleRegisterClick}
              initial={{ opacity: 1 }}
              whileTap={{ opacity: 0.6 }}
            >
              Registrarse
            </motion.button>
          </div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="hidden lg:flex w-full items-center justify-center">
          <img
            src={paisaje}
            alt="Imagen Descriptiva"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default LoginScreen;
