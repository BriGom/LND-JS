/* 3.2.5  LAB  Interaction
Estimated time
15-30 minutes

Level of difficulty
Easy

Objectives
Familiarize the student with:

interacting with the user (dialog boxes – alert, confirm, prompt).
Scenario
Let's go back to our contact list. After some recent tweaks (i.e. using an array and objects) it is actually starting to look like a list. However, one quite serious problem remained.
Changing data in the list, such as adding a new contact, has to be provided for right away in the program code.
What if we want to give the user the ability to enter the data of the added contact while the program is running? 
Modify the program to add, at the end of the list, not the contact, which is given in the code, but the one which the user will give during the program run. 
Use the prompt method to do this. At the end, display the first and the last contact from the list.
Pasos:
    1. Pide al usuario que introduzca el nombre del nuevo contacto utilizando el método prompt y guárdalo en una variable.
    2. Pide al usuario que introduzca el número de teléfono del nuevo contacto utilizando el método prompt y guárdalo en una variable.
    3. Pide al usuario que introduzca el correo electrónico del nuevo contacto utilizando el método prompt y guárdalo en una variable.
    4. Crea un nuevo objeto de contacto utilizando los datos proporcionados por el usuario y añádelo al final del array de contactos.
    5. Muestra en la consola el primer y el último contacto de la lista, incluyendo el nuevo contacto añadido por el usuario.
*/

const contactos = [{
  nombre: "Maxwell Wright",
  telefono: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  nombre: "Raja Villarreal",
  telefono: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  nombre: "Helen Richards",
  telefono: "0800 1111",
  email: "libero@convallis.edu"
}];

// write your code here
// 1 a 3 - Creamos variables para almacenar los datos del nuevo contacto que el usuario introducirá a través de los cuadros de diálogo prompt.
const nombre = prompt("Introduce el nombre del nuevo contacto:");
const telefono = prompt("Introduce el número de teléfono del nuevo contacto:");
const email = prompt("Introduce el correo electrónico del nuevo contacto:");

// 4 - Crear un nuevo objeto de contacto utilizando los datos proporcionados por el usuario.
const nuevoContacto = {
  nombre: nombre,
  telefono: telefono,
  email: email
};

// Añadir el nuevo contacto al final del array de contactos.
contactos.push(nuevoContacto);

//5 - Mostrar en la consola el primer y el último contacto de la lista.
const last = contactos.length - 1;

// EL $ indica que se va a insertar una variable dentro de la cadena de texto, y las llaves {} indican el nombre de la variable que se va a insertar.
console.log(`${contactos[0].nombre} / ${contactos[0].telefono} / ${contactos[0].email}`);
console.log(`${contactos[last].nombre} / ${contactos[last].telefono} / ${contactos[last].email}`);