
/* 3.2.4 SECTION PRACTICE
Exercise: Using everything you’ve learned up until this point, write a script that asks a user about the width, height, and length of a box, then calculate and return to the user the volume of this box.
As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this scenario). 
For now, assume that the values provided by the user are valid numbers, but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.
*/

const an = Number(prompt("Introduce el ancho de la caja:"));
const al = Number(prompt("Introduce la altura de la caja:"));
const lg = Number(prompt("Introduce la longitud de la caja:"));


if (isNaN(an) || isNaN(al) || isNaN(lg) || !an || !al || !lg) {
  alert("Por favor, introduce valores numéricos válidos para el ancho, la altura y la longitud de la caja.");
} else {
  const vol = an * al * lg;
  alert(`El volumen de la caja es: ${vol}`);
}

