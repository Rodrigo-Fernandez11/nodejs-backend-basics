// Importamos el módulo 'express' y 'fs'
import express from "express";
import { readFile } from "fs";

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos el puerto en el que queremos que se ejecute nuestro servidor
// Si el entorno proporciona un puerto (process.env.PORT), lo usamos; de lo contrario, usamos el puerto 1234
const desiredPort = process.env.PORT ?? 1234;

// Definimos una ruta que maneja las solicitudes GET a la URL '/'
// Cuando se accede a esta ruta, simplemente respondemos con un mensaje de 'Mi página'
app.get("/", (req, res) => {
  res.send("<h1>Mi página</h1>");
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/imagen-super-bonita.png'
// Cuando se accede a esta ruta, intentamos leer el archivo 'placa.png'
app.get("/imagen-super-bonita.png", (req, res) => {
  readFile("./placa.png", (err, data) => {
    if (err) {
      // Si hay un error al leer el archivo, respondemos con un error 500
      res.status(500).send("<h1>500 Internal Server Error</h1>");
    } else {
      // Si podemos leer el archivo correctamente, respondemos con el archivo
      res.type("png").send(data);
    }
  });
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/contacto'
// Cuando se accede a esta ruta, simplemente respondemos con un mensaje de 'Contacto'
app.get("/contacto", (req, res) => {
  res.send("<h1>Contacto</h1>");
});

// Si ninguna de las rutas anteriores coincide con la URL de la solicitud, respondemos con un error 404
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

// Hacemos que el servidor escuche en el puerto deseado
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
app.listen(desiredPort, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${desiredPort}`
  );
});
