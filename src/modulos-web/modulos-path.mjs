// Primero, necesitamos requerir el módulo 'path'
import {
  basename,
  dirname,
  extname,
  join,
  isAbsolute,
  normalize,
  parse,
  sep,
} from "path";

// path.basename() devuelve la última parte de una ruta
let rutaArchivo = "/home/usuario/documentos/mi_archivo.txt";
console.log(basename(rutaArchivo)); // Devuelve: 'mi_archivo.txt'

// path.dirname() devuelve el directorio de una ruta
console.log(dirname(rutaArchivo)); // Devuelve: '/home/usuario/documentos'

// path.extname() devuelve la extensión de un archivo
console.log(extname(rutaArchivo)); // Devuelve: '.txt'

// path.join() une todas las rutas proporcionadas en una sola cadena
let nuevaRuta = join("/home/usuario/", "documentos", "mi_archivo.txt");
console.log(nuevaRuta); // Devuelve: '/home/usuario/documentos/mi_archivo.txt'

// path.isAbsolute() determina si la ruta es absoluta
console.log(isAbsolute(nuevaRuta)); // Devuelve: true

// path.normalize() normaliza una cadena de ruta
let rutaNoNormalizada = "/home/usuario//documentos/mi_archivo.txt";
console.log(normalize(rutaNoNormalizada)); // Devuelve: '/home/usuario/documentos/mi_archivo.txt'

// path.parse() devuelve un objeto cuyas propiedades representan partes significativas de la ruta
console.log(parse(rutaArchivo));
/* Devuelve:
{
  root: '/',
  dir: '/home/usuario/documentos',
  base: 'mi_archivo.txt',
  ext: '.txt',
  name: 'mi_archivo'
}
*/

// path.sep proporciona el separador de rutas específico de la plataforma
console.log(sep); // Devuelve: '/' en Linux y macOS, '\\' en Windows
