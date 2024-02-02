// Importamos el módulo express
const express = require("express");
const app = express();

// Parámetros de Ruta
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // Validamos que el ID sea un número
  if (isNaN(id)) {
    res.status(400).send("ID de usuario inválido. Debe ser un número.");
  } else {
    res.send(`Usuario con ID: ${id}`);
  }
});

// Parámetros Query
app.get("/search", (req, res) => {
  const query = req.query.q;

  // Validamos que se haya proporcionado un término de búsqueda
  if (!query) {
    res.status(400).send("Se requiere un término de búsqueda.");
  } else {
    res.send(`Resultados de la búsqueda: ${query}`);
  }
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("¡Algo salió mal!");
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
