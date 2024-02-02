// Importamos los módulos 'http' y 'fs'
const http = require("node:http"); // protocolo HTTP
const fs = require("node:fs");

// Definimos el puerto en el que queremos que se ejecute nuestro servidor
// Si el entorno proporciona un puerto (process.env.PORT), lo usamos; de lo contrario, usamos el puerto 1234
const desiredPort = process.env.PORT ?? 1234;

// Esta es la función que se ejecutará cada vez que nuestro servidor reciba una solicitud
const processRequest = (req, res) => {
  // Establecemos el tipo de contenido de la respuesta como HTML
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  // Dependiendo de la URL de la solicitud, respondemos de diferentes maneras
  if (req.url === "/") {
    // Si la URL es '/', respondemos con un mensaje de 'Mi página'
    res.end("<h1>Mi página</h1>");
  } else if (req.url === "/imagen-super-bonita.png") {
    // Si la URL es '/imagen-super-bonita.png', intentamos leer el archivo 'placa.png'
    fs.readFile("./placa.png", (err, data) => {
      if (err) {
        // Si hay un error al leer el archivo, respondemos con un error 500
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        // Si podemos leer el archivo correctamente, respondemos con el archivo
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    // Si la URL es '/contacto', respondemos con un mensaje de 'Contacto'
    res.end("<h1>Contacto</h1>");
  } else {
    // Si la URL no coincide con ninguna de las anteriores, respondemos con un error 404
    res.statusCode = 404; // Not Found
    res.end("<h1>404</h1>");
  }
};

// Creamos el servidor y le proporcionamos nuestra función de procesamiento de solicitudes
const server = http.createServer(processRequest);

// Hacemos que el servidor escuche en el puerto deseado
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
server.listen(desiredPort, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${desiredPort}`
  );
});
