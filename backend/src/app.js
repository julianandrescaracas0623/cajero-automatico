const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const conexion = require("./database/conexion");
require("dotenv").config();

// Inicializa la aplicación Express
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Seguridad adicional
app.use(helmet()); // Configura varios encabezados HTTP para mejorar la seguridad
app.use(helmet.frameguard({ action: "deny" })); // Protege contra clickjacking

// Registro de solicitudes HTTP
app.use(morgan("combined")); // Registra todas las solicitudes HTTP
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  })
);

// Rutas
app.use("/users", require("./router/userRoutes"));
app.use("/account", require("./router/accountRoutes"));

//Conectar a MYSQL
const startServers = async () => {
  try {
    await conexion.sync({ force: false });
    console.log("Conectado a la base de datos..."); //verificar si la conexion funciona
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto: ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error); //mostrar cual es el error
    process.exit(1);
  }
};

startServers();
