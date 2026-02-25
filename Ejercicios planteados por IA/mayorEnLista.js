
/* 8️⃣ Número mayor en una lista
1. Declara 4 números en variables distintas.
2. Encuentra cuál es el mayor usando condicionales.
3. Muestra el resultado. (No uses arrays todavía si aún no los viste */

const n1 = 15;
const n2 = 42;
const n3 = 7;
const n4 = 23;

// MÉTODO 1: Rápido y directo
function mayorLista(){
    let numeros = [n1, n2, n3, n4];

    // Math.max solo acepta números sueltos (1, 5, 2...). 
    // El "..." (Spread) abre el array y suelta los números dentro de la función.
    let numMax = Math.max(...numeros);

    console.log("Método Math.max: " + numMax);
    console.log("----------------");
}

// MÉTODO 2: Lógica paso a paso
function mayorListaBucle(){
    let numeros = [n1, n2, n3, n4];
    
    // 1. Elegimos un "campeón" inicial (el primer número de la lista).
    let mayor = numeros[0];

    // 2. Empezamos el bucle en i = 1 (el segundo número), 
    // porque no hace falta comparar al primero consigo mismo.
    for (let i = 1; i < numeros.length; i++) {
        
        // 3. Si el número actual (numeros[i]) es más grande que nuestro campeón...
        if (numeros[i] > mayor) {
            // 4. ...ese número se convierte en el nuevo campeón.
            mayor = numeros[i];
        }
    }
    console.log("Método Bucle For: " + mayor);
}

mayorLista();
mayorListaBucle();
