const express = require("express");

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos nuestro middleware de autenticación
// Este middleware toma tres argumentos: req (la solicitud), res (la respuesta), y next (la función que llama al siguiente middleware)
const authentication = (req, res, next) => {
  // Aquí es donde verificarías si el usuario está autenticado
  // Por ejemplo, podrías buscar una cookie o un token de autenticación en la solicitud
  // En este ejemplo, simplemente vamos a suponer que el usuario está autenticado
  const isAuthenticated = true;

  if (isAuthenticated) {
    // Si el usuario está autenticado, llamamos a 'next()' para pasar al siguiente middleware
    next();
  } else {
    // Si el usuario no está autenticado, respondemos con un error 401
    res.status(401).send("No estás autenticado");
  }
};

// Usamos nuestro middleware de autenticación en nuestra aplicación
// 'app.use()' añade el middleware a la pila de middleware de nuestra aplicación
app.use(authentication);

// Aquí iría el resto de tu código...

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
