import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import paisaje from "../../../public/img/bancoagricola.webp";
import Footer from "../Footer";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import MensajeError from "../../components/message/MensajeError";

const Registrar = () => {
  const { form, cambiar } = HelperForm({});
  const navigate = useNavigate();
  const handleRegisterFinishClick = async e => {
    e.preventDefault();
    const inicioRegistro = { ...form };

    try {
      const response = await fetch(`${Global.url}users/create/validate-home`, {
        body: JSON.stringify(inicioRegistro),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!data.status) {
        MensajeError({ title: data.title, message: data.message });
      } else {
        navigate("/registerFinish", {
          state: {
            formData: inicioRegistro,
          },
        });
      }
    } catch (error) {
      MensajeError({
        title: "Error",
        message: error.message,
      });
      console.log(error.message);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
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
              <h2 className="text-4xl font-bold text-gray-800">Registro</h2>
              <p className="text-gray-500">Completa tus datos para continuar</p>
            </div>

            {/* Formulario */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  id="date"
                  type="date"
                  name="fechaNacimiento"
                  required
                  onChange={cambiar}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de Expedicion
                </label>
                <input
                  id="date"
                  type="date"
                  name="fechaExpedicion"
                  required
                  onChange={cambiar}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <select
                  id="selection"
                  name="tipoDocumento"
                  required
                  placeholder="Número de documento"
                  onChange={cambiar}
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
                type="number"
                onChange={cambiar}
                placeholder="Número de documento"
                required
                className="w-full p-4 border-0 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-400 appearance-none"
              />
              <div className="flex gap-2">
                <motion.button
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                  onClick={handleHomeClick}
                  initial={{ opacity: 1 }}
                  whileTap={{ opacity: 0.6 }}
                >
                  Regresar
                </motion.button>

                <motion.button
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                  onClick={handleRegisterFinishClick}
                  initial={{ opacity: 1 }}
                  whileTap={{ opacity: 0.6 }}
                >
                  Siguiente
                </motion.button>
              </div>
            </div>
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

export default Registrar;
