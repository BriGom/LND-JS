
/* ### 9️⃣ Simulador de contraseña
1. Declara una variable con una contraseña correcta. 
2. Declara otra con una contraseña ingresada.

    Si coinciden → mostrar “Acceso concedido”. Si no → mostrar “Acceso denegado”. */
    
const CORRECTA = "saturno";
    
function validarAcceso() {
  const contraUsuario = prompt("Por favor, introduzca la contraseña.");
  // Forma abreviada del if. Aquí  hacemos uso de que === devuelve un booleano (contraseña === saturno? True/false)
  const isCorrecta = (contraUsuario === CORRECTA);
  
  if (!isCorrecta) {
    alert("Acceso denegado.");
  } else {
    alert ("Acceso concedido.");
  }
}