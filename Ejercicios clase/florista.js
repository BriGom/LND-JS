
//Declaramos precio y cantidad por tipo
const rosaPrecio = 8;
const rosaCantidad = 70;
const lirioPrecio = 10;
const lirioCantidad = 50;
const tulipanPrecio = 2;
const tulipanCantidad = 120;

// Declaramos y calculamos el valor final por tipo de flor
const rosaValor = rosaPrecio * rosaCantidad;
const lirioValor = lirioPrecio * lirioCantidad;
const tulipanValor = tulipanPrecio * tulipanCantidad;

const precioTotal = rosaValor + lirioValor + tulipanValor;

console.log("Rosa - precio unidad: "+ rosaPrecio + ", cantidad: "+ rosaCantidad + " valor: " + rosaValor);
console.log("Lirio - precio unidad: "+ lirioPrecio + ", cantidad: "+ lirioCantidad + " valor: " + lirioValor);
console.log("Tulipan - precio unidad: "+ tulipanPrecio + ", cantidad: "+ tulipanCantidad + " valor: " + tulipanValor);
console.log("Total: " + precioTotal);

