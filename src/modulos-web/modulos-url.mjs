// Primero, necesitamos importar el módulo 'url'
import url from "url";

// url.parse() toma una URL como string y devuelve un objeto URL
let urlString = "http://ejemplo.com/ruta?year=2023&month=february";
let urlObj = url.parse(urlString, true);
console.log(urlObj);
/* Devuelve:
{
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'ejemplo.com',
  port: null,
  hostname: 'ejemplo.com',
  hash: null,
  search: '?year=2023&month=february',
  query: { year: '2023', month: 'february' },
  pathname: '/ruta',
  path: '/ruta?year=2023&month=february',
  href: 'http://ejemplo.com/ruta?year=2023&month=february'
}
*/

// url.format() toma un objeto URL y devuelve una URL como string
let newUrlString = url.format(urlObj);
console.log(newUrlString); // Devuelve: 'http://ejemplo.com/ruta?year=2023&month=february'

// url.resolve() resuelve una URL objetivo a partir de una URL base
let base = "http://ejemplo.com/ruta";
let target = "otra_ruta";
let resolvedUrl = url.resolve(base, target);
console.log(resolvedUrl); // Devuelve: 'http://ejemplo.com/otra_ruta'
