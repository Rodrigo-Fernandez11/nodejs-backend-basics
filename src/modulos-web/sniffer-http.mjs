// Importamos los módulos 'http' y 'https'
import { createServer } from "http";
import { get } from "https";

// Definimos el hostname y el puerto para nuestro servidor local
const hostname = "localhost",
  port = 3000;

// Definimos las opciones para la solicitud HTTP al sitio "jonmircha.com"
const options = {
  host: "jonmircha.com",
  port: 443,
  path: "/cursos",
};

// Inicializamos una variable para almacenar el código HTML que recibiremos de "jonmircha.com"
let htmlCode = "";

// Definimos la función que se ejecutará cuando recibamos una respuesta de "jonmircha.com"
const httpClient = (res) => {
  console.log(
    `El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`
  );

  // Cuando recibimos un fragmento de datos, lo añadimos a nuestra variable 'htmlCode'
  res.on("data", (data) => {
    htmlCode += data;
    console.log(data, data.toString());
  });
};

// Definimos la función que se ejecutará si hay un error en la solicitud a "jonmircha.com"
const httpError = (err) => {
  console.error(
    `El sitio ${options.host} no ha respondido. Código: ${err.code}. Mensaje: ${err.message}.`
  );
};

// Definimos la función que se ejecutará cuando nuestro servidor local reciba una solicitud
const webServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(htmlCode);
};

// Hacemos una solicitud GET a "jonmircha.com" y proporcionamos nuestras funciones de devolución de llamada
get(options, httpClient).on("error", httpError);

// Creamos un servidor HTTP local que escucha en el puerto y el hostname definidos
createServer(webServer).listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
