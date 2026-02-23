/* 4️⃣ Tabla de multiplicar
Declara una variable con un número.
Usa un for para mostrar su tabla de multiplicar del 1 al 10.*/

// Declaramos la constante pidiendo ppr pantalla
const n = Number(prompt("Indica un número para saber su tabla de multiplicar"));

function tabla(n){
  //creamos un bucle for inicializando el contador a 0 con un maximo de 11, para que llegue de 0 a 10
  for (let i = 0; i < 11; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}
tabla(n); // llamamos a la función