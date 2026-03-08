/*  🔟 Contar vocales (nivel 3 suave)
Declara una palabra en una variable y:
- Recorre la palabra con un bucle.
- Cuenta cuántas vocales tiene.
- Muestra el total. */

const palabra = prompt("Introduce una palabra. Si no pones nada el resultado será 0.") || "";

function contarVocales(palabra) {
  let contador = 0;
  const vocales = "aeiouáéíóúü";

  for (const letra of palabra.toLowerCase()){
    if (vocales.includes(letra)) contador++;
  }
  return contador;
}
console.log("Se utilizan un total de: " + contarVocales(palabra) + " vocales en la palabra " + palabra + ".");