/* 6️⃣ Calculadora simple
Crea una pequeña calculadora que:
1. Tenga dos números.
2. Tenga una variable con la operación ("+", "-", "*", "/").
3. Use switch para realizar la operación correcta.
4. Muestre el resultado. */

// Usamos este orden para que los prompts sean más naturales
const n = Number(prompt("Ingrese el primer número"));
const op = prompt("Ingrese el operador (+, -, *, /) ");
const m = Number(prompt("Ingrese el segundo número"));

if (isNaN(n) || isNaN(m)) { // Validamos que sean números, sino, error
  console.log("Uno de los vslores no es un número.");
} else {
  console.log("El resultado es: " + calc(n, m, op));
}

function calc(n1, n2, res){
  let x; // Variable temporal
  switch (res) {
  case "+":
    x = n + m;
    break;
  case "-":
    x = n - m;
    break;
  case "*":
    x = n * m;
    break;
  case "/" : 
    if (m === 0) { // Controlamos la división por 0
      x = "No se puede dividir por 0.";
    } else {
      x = n / m;
    }
    break; 
  default: // Similar a un else en un if
    return "Operación no válida.";
  }
  return x;
}
calc(n,m, op);
