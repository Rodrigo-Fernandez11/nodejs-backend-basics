// Importamos los módulos 'express' y 'path'
import express, { json } from "express";
import ditto from "./pokemon/ditto.json";
import path from "path";

// Definimos el puerto en el que queremos que se ejecute nuestro servidor
// Si el entorno proporciona un puerto (process.env.PORT), lo usamos; de lo contrario, usamos el puerto 1234
const PORT = process.env.PORT ?? 1234;

const app = express();

// Desactivamos el encabezado 'X-Powered-By' por razones de seguridad
app.disable("x-powered-by");

// Usamos el middleware 'express.json()' para analizar las solicitudes con cuerpos JSON
app.use(json());

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

// Definimos una ruta que maneja las solicitudes GET a la URL '/pokemon/ditto'
// Cuando se accede a esta ruta, respondemos con el JSON de Ditto
app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

// Definimos una ruta que maneja las solicitudes POST a la URL '/pokemon'
// Cuando se accede a esta ruta, respondemos con el cuerpo de la solicitud
// En una aplicación real, probablemente guardaríamos estos datos en una base de datos
app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

// Si ninguna de las rutas anteriores coincide con la URL de la solicitud, respondemos con un error 404
//siempre tiene que ser la ultima
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

// Hacemos que el servidor escuche en el puerto deseado
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
