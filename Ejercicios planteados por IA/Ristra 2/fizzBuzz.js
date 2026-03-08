/* 1️⃣1️⃣ FizzBuzz (El clásico)
Usa un bucle para recorrer los números del 1 al 20.
    1. Si el número es múltiplo de 3, muestra "Fizz".
    2. Si es múltiplo de 5, muestra "Buzz".
    3. Si es múltiplo de 3 y de 5, muestra "FizzBuzz".
    4. Si no cumple ninguna, muestra el número. */

function fizzBuzz() {
// Recorremos los números del 1 al 20
  for (let contador = 1; contador <= 20; contador++){
    if (contador % 3 === 0 && contador % 5 === 0){ // Si el número es múltiplo de 3 y de 5
      console.log("FizzBuzz");
    } else if (contador % 3 === 0){ // Si el número es múltiplo de 3
      console.log("Fizz");
    } else if (contador % 5 === 0){ // Si el número es múltiplo de 5
      console.log("Buzz");
    } else {
      console.log(contador); // Si no cumple ninguna de las condiciones anteriores, muestra el número
    }       
  }
}
fizzBuzz(); // Llamamos a la función para ejecutar el código