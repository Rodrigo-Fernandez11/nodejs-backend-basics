// Primero, necesitamos requerir el módulo 'http'
import { request } from "http";

// Definimos las opciones de la solicitud
let opciones = {
  hostname: "ejemplo.com", // El nombre del host al que se va a hacer la solicitud
  port: 80, // El puerto a usar
  path: "/ruta", // La ruta en el servidor
  method: "GET", // El método HTTP a usar
};

// Creamos la solicitud
let solicitud = request(opciones, (respuesta) => {
  // Esta función se llama cuando recibimos la respuesta del servidor
  let datos = "";

  // Cuando recibimos un fragmento de datos, lo añadimos a nuestra variable 'datos'
  respuesta.on("data", (fragmento) => {
    datos += fragmento;
  });

  // Cuando la respuesta se ha completado, imprimimos los datos
  respuesta.on("end", () => {
    console.log(datos);
  });
});

// Si hay un error en la solicitud, lo imprimimos
solicitud.on("error", (error) => {
  console.error(`Hubo un error: ${error.message}`);
});

// Finalmente, terminamos la solicitud
solicitud.end();
