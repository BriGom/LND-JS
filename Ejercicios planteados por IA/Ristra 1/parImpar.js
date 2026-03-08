/*2️⃣ Número par o impar
Pide un número (puede estar guardado en una variable).
Muestra en consola si es par o impar*/

const n = Number(prompt("El número en cuestión: "));
function parImpar(n){
  if (n % 2 === 0) {
    console.log(n +" Es par.");
  } else {
    console.log(n +" Es impar");
  }
}
parImpar(n);