// Importamos el módulo 'express'
import express from "express";

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos nuestro middleware de manejo de errores
// Este middleware toma cuatro argumentos: err (el error), req (la solicitud), res (la respuesta), y next (la función que llama al siguiente middleware)
const errorHandler = (err, req, res, next) => {
  // Imprimimos los detalles del error
  console.error(err.stack);

  // Respondemos con un error 500 y un mensaje de error
  res.status(500).send("¡Algo salió mal!");
};

// Usamos nuestro middleware de manejo de errores en nuestra aplicación
// 'app.use()' añade el middleware a la pila de middleware de nuestra aplicación
app.use(errorHandler);

// Aquí iría el resto de tu código...

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

// Es importante tener en cuenta que los middlewares de manejo de errores deben definirse después de todas las otras rutas y middlewares, ya que los middlewares y las rutas se ejecutan en el orden en que se definen.
