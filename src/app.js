import express from "express";
//import logger from "./middleware/logger";
//import authentication from "./middlewares/authentication";

const app = express();
const port = 3000;
// ejemplo de uso de middleware
//app.use(logger);
//app.use(authentication);

// Middleware para parsear el cuerpo de las solicitudes HTTP
//app.use(express.json());

// Rutas
//app.use('/users', userRouter);

// Manejo de errores
//app.use((err: Error, req: Request, res: Response) => {
//  console.error(err.stack);
//  res.status(500).send('¡Ups! Algo salió mal.');
//});

// Desactivamos la cabecera 'X-Powered-By' por razones de seguridad
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.listen(port, () => {
  console.log("el servidor esta corriendo en el puesto" + port);
});
