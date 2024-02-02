// Primero, necesitamos importar los módulos 'http' y 'url'
const http = require("http");
const url = require("url");

// Luego, creamos el servidor
const server = http.createServer((req, res) => {
  // Parseamos la URL de la solicitud
  const parsedUrl = url.parse(req.url, true);

  // Obtenemos la ruta
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Definimos un manejador de rutas
  const router = {
    ruta1: function (req, res) {
      res.end("Estás en la ruta1!");
    },
    ruta2: function (req, res) {
      res.end("Estás en la ruta2!");
    },
  };

  // Elegimos la función del manejador de rutas correspondiente a la ruta de la solicitud, o una función de manejador por defecto
  const chosenHandler =
    typeof router[trimmedPath] !== "undefined"
      ? router[trimmedPath]
      : (req, res) => {
          res.end("Ruta no encontrada");
        };

  // Usamos la función del manejador de rutas
  chosenHandler(req, res);
});

// Finalmente, hacemos que el servidor escuche en el puerto 3000
server.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});
