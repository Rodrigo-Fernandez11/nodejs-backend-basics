// Primero, necesitamos requerir el módulo 'http'
import { createServer } from "http";

// Creamos un servidor utilizando http.createServer()
// Este servidor responderá a todas las solicitudes con un '¡Hola, Mundo!'
const server = createServer((req, res) => {
  res.statusCode = 200; // El código de estado HTTP 200 significa 'OK'
  res.setHeader("Content-Type", "text/plain"); // Establecemos el tipo de contenido de la respuesta como texto plano
  res.end("¡Hola, Mundo!\n"); // Terminamos la respuesta con el mensaje '¡Hola, Mundo!'
});

// Ahora, hacemos que el servidor escuche en el puerto 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("El servidor está escuchando en http://127.0.0.1:3000");
});
