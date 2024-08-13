const express = require("express");
const cors = require("cors");
const { conexion, authenticate } = require("./db/conexion");
require("dotenv").config();

// Inicializa la aplicación Express
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conectar a MYSQL
const startServers = async () => {
  try {
    await authenticate();

    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto: ${port}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

startServers();
