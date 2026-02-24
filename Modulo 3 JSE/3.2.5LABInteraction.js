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

const contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];

// write your code here
// 1 a 3 - Creamos variables para almacenar los datos del nuevo contacto que el usuario introducirá a través de los cuadros de diálogo prompt.
const name = prompt("Introduce el nombre del nuevo contacto:");
const phone = prompt("Introduce el número de teléfono del nuevo contacto:");
const email = prompt("Introduce el correo electrónico del nuevo contacto:");

// 4 - Crear un nuevo objeto de contacto utilizando los datos proporcionados por el usuario.
const nuevoContacto = {
  name: name,
  phone: phone,
  email: email
};

// Añadir el nuevo contacto al final del array de contactos.
contacts.push(nuevoContacto);

//5 - Mostrar en la consola el primer y el último contacto de la lista.
const last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);