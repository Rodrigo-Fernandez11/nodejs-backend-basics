// Importamos el módulo 'express'
import express, { json } from "express";

// Importamos el archivo JSON de Ditto, un Pokémon
import dittoJSON from "./pokemon/ditto.json";

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos una ruta que maneja las solicitudes GET a la URL '/pokemon/ditto'
// Cuando se accede a esta ruta, respondemos con el JSON de Ditto
app.get("/pokemon/ditto", (req, res) => {
  res.json(dittoJSON);
});

// Definimos una ruta que maneja las solicitudes POST a la URL '/pokemon'
// Cuando se accede a esta ruta, esperamos recibir un cuerpo JSON en la solicitud
// En una aplicación real, probablemente guardaríamos estos datos en una base de datos
app.post("/pokemon", json(), (req, res) => {
  // Añadimos un timestamp a los datos y los enviamos como respuesta
  req.body.timestamp = Date.now();
  res.status(201).json(req.body);
});

// Si ninguna de las rutas anteriores coincide con la URL de la solicitud, respondemos con un error 404
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

// Hacemos que el servidor escuche en el puerto 1234
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
app.listen(1234, () => {
  console.log("Servidor escuchando en el puerto http://localhost:1234");
});
