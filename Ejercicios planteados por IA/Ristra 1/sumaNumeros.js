/* 7️⃣ Suma de números del 1 al N
Declara una variable n.
Usa un bucle para sumar todos los números desde 1 hasta n.
Muestra el resultado final */

const n = Number(prompt("Ingresa el ultimo número de la suma."));

function unoHastaN(n){
  let suma = 0; // variable acumuladora. Nace y muere en la funcion
  
  for (let i = 1; i <= n; i++) {
    const ant = suma; // Guardamos el valor de suma antes de cambiarlo
    suma += i;
    
    console.log(ant + " + " + i + " = " + suma); 
    // <==1+2=3, 3+3=6...

  }
}
unoHastaN(n);