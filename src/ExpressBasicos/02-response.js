// Importamos los módulos 'express' y 'path'
import express from "express";
import { resolve } from "path";

// Creamos una nueva aplicación Express.js
const app = express();

// Definimos una ruta que maneja las solicitudes GET a la URL '/'
// Cuando se accede a esta ruta, simplemente respondemos con un mensaje de 'Hola mundo desde Express.js'
app.get("/", (req, res) => {
  // Establecemos el tipo de contenido de la respuesta como HTML
  res.set({ "content-type": "text/html; charset=utf-8" });
  // Terminamos la respuesta con el método 'end'
  res.end("<h1>Hola mundo desde Express.js con el método end</h1>");
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/json'
// Cuando se accede a esta ruta, respondemos con un objeto JSON
app.get("/json", (req, res) => {
  // Enviamos un objeto JSON como respuesta con el método 'json'
  res.json({
    name: "Jon",
    age: 39,
    youtube: "@jonmircha",
  });
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/archivo'
// Cuando se accede a esta ruta, respondemos con un archivo
app.get("/archivo", (req, res) => {
  // Enviamos un archivo como respuesta con el método 'sendFile'
  // Usamos el módulo 'path' para resolver la ruta del archivo
  res.sendFile(resolve("index.html"));
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/plantilla'
// Esta ruta no funcionará a menos que especifiquemos un motor de plantillas para Express.js
app.get("/plantilla", (req, res) => {
  // Intentamos renderizar una plantilla con el método 'render'
  res.render("plantilla");
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/jonmircha'
// Cuando se accede a esta ruta, redirigimos al usuario a 'https://jonmircha.com'
app.get("/jonmircha", (req, res) => {
  // Redirigimos al usuario con el método 'redirect'
  res.redirect(301, "https://jonmircha.com");
});

// Iniciamos el servidor en el puerto 3000
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
app.listen(3000, () =>
  console.log("Iniciando Express desde http://localhost:3000")
);
