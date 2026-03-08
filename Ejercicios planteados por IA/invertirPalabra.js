/* ### 1️⃣2️⃣ Invertir una palabra
Declara una variable con una palabra corta.
Usa un bucle para leer la palabra de atrás hacia adelante y armar una nueva cadena.
Muestra la palabra invertida en consola. */

function invertirPalabra(){
  const palabra = "Hola"; // Declaramos una variable con una palabra corta
  let palabraInvertida = ""; // Variable para almacenar la palabra invertida

  // Usamos un bucle para leer la palabra de atrás hacia adelante
  for (let i = palabra.length - 1; i >= 0; i--){
    palabraInvertida += palabra[i]; // Agregamos cada letra a la nueva cadena
  }
  console.log(palabra);
  console.log(palabraInvertida); // Mostramos la palabra invertida en consola 
}

invertirPalabra(); // Llamamos a la función para ejecutar el código

// Ahora creamos un array de 6 elementos, inicializamos el vector con inputs por teclado. Copiamos los elementos del array en otro pero en orden inverso, y lo mostramos por pantalla.

const palabras = []; // Array para almacenar las palabras ingresadas por el usuario
const palabrasInvertidas = []; // Array para almacenar las palabras invertidas

function invertirArray(){
  // Solicitamos al usuario que ingrese 6 palabras
  for (let i = 1; i <= 6; i++){
    const palabra = prompt("Ingrese la palabra número " + i); // Solicitamos al usuario que ingrese una palabra
    palabras.push(palabra); // Agregamos la palabra al array
  }

  // Invertimos el orden de las palabras (no las palabras en sí)
  for (let i = palabras.length - 1; i >= 0; i--){
    palabrasInvertidas.push(palabras[i]); // Agregamos las palabras en orden inverso
  }
}
invertirArray(); // Llamamos a la función para ejecutar el código

console.log("Palabras ingresadas: ", palabras); // Mostramos las palabras ingresadas por el usuario
console.log("Palabras con orden invertido: ", palabrasInvertidas); // Mostramos las palabras en orden inverso