// Importamos el módulo 'express'
const express = require("express");

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos nuestro middleware de registro
// Este middleware toma tres argumentos: req (la solicitud), res (la respuesta), y next (la función que llama al siguiente middleware)
const logger = (req, res, next) => {
  // Imprimimos los detalles de la solicitud
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

  // Llamamos a 'next()' para pasar al siguiente middleware
  next();
};

// Usamos nuestro middleware de registro en nuestra aplicación
// 'app.use()' añade el middleware a la pila de middleware de nuestra aplicación
app.use(logger);

// Aquí iría el resto de tu código...

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
