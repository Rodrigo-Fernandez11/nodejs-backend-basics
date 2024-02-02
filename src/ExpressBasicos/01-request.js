import express from "express";

const app = express();

// Definimos una ruta que maneja las solicitudes GET a la URL '/'
// Cuando se accede a esta ruta, simplemente respondemos con un mensaje de 'Hola mundo desde Express.js'
app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde Express.js</h1>");
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/user/:id-:name-:age'
// Aquí, ':id', ':name' y ':age' son parámetros de ruta que podemos capturar en nuestra función de devolución de llamada
app.get("/user/:id-:name-:age", (req, res) => {
  // req.params es un objeto que contiene los parámetros de ruta
  // En este caso, capturamos los valores de 'id', 'name' y 'age' a través de req.params.id, req.params.name y req.params.age respectivamente
  // Luego, enviamos una respuesta que incluye estos valores
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
      ${req.params.name}, bienvenidos a Express.js. Tu id es ${req.params.id} y tienes ${req.params.age} años.
    </h1>
  `);
});

// Definimos una ruta que maneja las solicitudes GET a la URL '/search'
// Esta ruta espera recibir parámetros de consulta en la URL (por ejemplo, 'id', 'name' y 'age')
app.get("/search", (req, res) => {
  // req.query es un objeto que contiene los parámetros de consulta
  // En este caso, capturamos los valores de 'id', 'name' y 'age' a través de req.query.id, req.query.name y req.query.age respectivamente
  // Luego, enviamos una respuesta que incluye estos valores
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
      ${req.query.name}, bienvenidos a Express.js. Tu id es ${req.query.id} y tienes ${req.query.age} años.
    </h1>
  `);
});

// Iniciamos el servidor en el puerto 3000
// Cuando el servidor está listo, se ejecutará la función de devolución de llamada que proporcionamos,
// que simplemente imprime un mensaje en la consola
app.listen(3000, () =>
  console.log("Iniciando Express desde http://localhost:3000")
);
