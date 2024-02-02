// Importamos el módulo 'express'
import express from "express";

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos una ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Aplicación de ejemplo escuchando en el puerto 3000!");
});
