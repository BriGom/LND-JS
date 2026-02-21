/* 1️⃣ Número mayor
Escribe un programa que:
Declare dos variables con números.
Muestre en consola cuál de los dos es mayor.
Si son iguales, que lo indique. */

function numeroMayor() {
  if (n > m) {
    console.log(n, " es mayor que ", m)
  } else if (n < m) {
    console.log(m, " es mayor que ", n)

  } else {
    console.log("Ambos números son iguales")
  }
}
const n = Number(prompt("Primer número: "));
const m = Number(prompt("Segundo número: ")

numeroMayor(n,m)