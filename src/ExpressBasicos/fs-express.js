import express from "express";
import path from "path";

const app = express();

// Sirve archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

// permitir descargar archivos

app.get("/descargar", (req, res) => {
  const file = path.join(__dirname, "public/imagen.jpg");
  res.download(file); // Descarga 'imagen.jpg'
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
