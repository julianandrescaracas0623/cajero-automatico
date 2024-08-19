import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { Global } from "../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Autenticado, setAutenticado] = useState(null);

  useEffect(() => {
    autenticarUsuario();
  }, []);

  const autenticarUsuario = async () => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      console.log("No hay usuario autenticado.");
      return;
    }

    try {
      const userObj = JSON.parse(usuario);
      if (!userObj.token) {
        console.log("No hay token en el objeto del usuario.");
        return;
      }

      const request = await fetch(
        `${Global.url}users/login/autorization/${userObj.user.idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: userObj.token,
          },
        }
      );

      if (!request.ok) {
        // Verifica si la respuesta fue exitosa
        console.error("Error en la autenticación:", await request.json());
        return;
      }

      const data = await request.json();
      setAutenticado(data);
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ Autenticado, setAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
