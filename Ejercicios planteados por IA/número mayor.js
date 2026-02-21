/* 1️⃣ Número mayor
Escribe un programa que:
Declare dos variables con números.
Muestre en consola cuál de los dos es mayor.
Si son iguales, que lo indique. */

numeroMayor() {
  let n = 5;
  let m = 7;
  
  if (n > m) {
    console.log(n, " es mayor que ", m);
  } else if (n < m) {
        console.log(m, " es mayor que ", n);

  } else {
    console.log("Ambos números son iguales");
  }
};