
/* ⃣ Contador de positivos
Declara 5 variables con números diferentes.
Cuenta cuántos son positivos.
Muestra el total en consola. */

// Declaramos la variavle contador
let c = 0;

// no le pasamos parametros a la función
function contador(){
for (let i = 1; i <= 5; i++) {
  const n = Number(prompt("Número: " + i)); // Pedimos un número por vuelta del bucle
  if (n > 0) {
    c = c + 1; // si el número es positivo, suma 1 al contador
  }
}
  console.log("Hay un total de: " + c + " números positivos.");

}

contador();