"use strict";
// //aray de palabras random
// const palabras = [
//   "sanguijuela",
//   "electrocardiograma",
//   "cocodrilo",
//   "emparedado",
//   "lavadora",
//   "patata",
//   "camioneta",
//   "brazo",
//   "holograma",
// ];

// const random = Math.floor(Math.random() * palabras.length);

// const secretWord = palabras[random]; //secretWord es la palabra random que tiene que aparecer en el texto
// const secretWord = "casa";
// const guessLetter = "a";
const main = document.querySelector("main");

//aqui convertimos la palabra en un array "lettersArray"

const lettersArray = [];
for (let i = 0; i < secretWord.length; i++) {
  console.log(secretWord[i]);

  lettersArray.push(secretWord[i]);
}
console.log(lettersArray);
console.log(secretWord.length);

// Aqui generamos otro array con tantos guiones como lettersArray
for (let i = 0; i < secretWord.length; i++) {
  guionesArray.push("_");
}
console.log(guionesArray);
console.log(lettersArray.length);
//const guesLetter = document.querySelector("#input").value;

for (let i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i]);
  if (lettersArray[i] === guessLetter) {
    guionesArray[i] = guessLetter;
  }
}
console.log(guionesArray);

//YO TENGO QUE CREAR LA MISMA CANTIDAD DE PARRAFOS QUE GUIONESARRAY
//el numero de parrafos = guionesArray.length

for (let i = 0; i < secretWord.length; i++) {
  const p = document.createElement("p");
  main.append(p);
  p.textContent = guionesArray[i];
}
