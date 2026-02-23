/* 3️⃣ Conversor de temperatura
Declara una variable con grados Celsius.
Convierte el valor a Fahrenheit.
Muestra el resultado en consola.
(Fórmula: F = C * 9/5 + 32) */

const celsius = Number(prompt("¿Qué temperatura (celsius) hace?"));

function CaF(celsius){
  const farhen =(celsius * 1.8)+32;
  console.log(celsius + " °C equivalen a " + farhen + "°F.");
  
}
CaF(celsius);