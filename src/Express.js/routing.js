// Importamos los módulos 'http' y 'fs'
import { createServer } from "node:http";

// Importamos el archivo JSON de Ditto, un Pokémon
import dittoJSON from "./pokemon/ditto.json";

// Esta es la función que se ejecutará cada vez que nuestro servidor reciba una solicitud
const processRequest = (req, res) => {
  // Extraemos el método y la URL de la solicitud
  const { method, url } = req;

  // Dependiendo del método de la solicitud, respondemos de diferentes maneras
  switch (method) {
    case "GET":
      // Si el método es GET, comprobamos la URL de la solicitud
      switch (url) {
        case "/pokemon/ditto":
          // Si la URL es '/pokemon/ditto', respondemos con el JSON de Ditto
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          // Si la URL no coincide con ninguna de las anteriores, respondemos con un error 404
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      // Si el método es POST, comprobamos la URL de la solicitud
      switch (url) {
        case "/pokemon": {
          // Si la URL es '/pokemon', recogemos el cuerpo de la solicitud
          let body = "";

          // Escuchamos el evento 'data' para recoger los fragmentos de datos de la solicitud
          // chunk = trozo
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          // Cuando la solicitud se ha completado, procesamos los datos
          req.on("end", () => {
            const data = JSON.parse(body);
            // Podríamos llamar a una base de datos para guardar la información aquí
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });

            // Añadimos un timestamp a los datos y los enviamos como respuesta
            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }

        default:
          // Si la URL no coincide con ninguna de las anteriores, respondemos con un error 404
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
  }
};

// Creamos el servidor y le proporcionamos nuestra función de procesamiento de solicitudes
const server = createServer(processRequest);

// Hacemos que el servidor escuche en el puerto 1234
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
server.listen(1234, () => {
  console.log("Servidor escuchando en el puerto http://localhost:1234");
});
