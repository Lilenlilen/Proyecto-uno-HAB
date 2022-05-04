"use strict";
//aray de palabras random
const palabras = [
  "sanguijuela",
  "electrocardiograma",
  "cocodrilo",
  "emparedado",
  "lavadora",
  "patata",
  "camioneta",
  "brazo",
  "holograma",
];

const random = Math.floor(Math.random() * palabras.length);

const secretWord = palabras[random]; //secretWord es la palabra random que tiene que aparecer en el texto

const lettersArray = []; // ["m", "e", "s", "a"](esta no aparece en pantalla) [-,-,s,a](si aparece en pantalla) usserLetter ="a" contador(imagen)=1
for (let i = 0; i < secretWord.length; i++) {
  console.log(secretWord[i]);

  lettersArray.push(secretWord[i]);
}
console.log(lettersArray.length);
console.log(secretWord.length);

const main = document.querySelector("main");

// Aqui generamos otro array con tantos guiones como lettersArray
const guionesArray = [];
for (let i = 0; i < secretWord.length; i++) {
  guionesArray.push("_");
}
console.log(guionesArray);

//Aqui recogemos el input del usuario
const guessLetter = document.querySelector("#input").value;

//Aqui creamos p con el contenido de cada posicion de guionesArray
for (let i = 0; i < secretWord.length; i++) {
  const p = document.createElement("p");
  main.append(p);
  p.textContent = guionesArray[i];
}
//Aqui comprobamos si la letra del usuario está en el lettersArray y si es así, el guión se sustituye por esta letra.
for (let i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i]);
  if (lettersArray[i] === guessLetter) {
    guionesArray[i] = guessLetter;
  }
}
// const guessLetter = "m";

// guinesArray[2] = "m";
// console.log(guionesArray);

// const secretArrayDisplay = [secretWord.length.replace("_")];
// document.querySelector("#palabraSecreta").textContent = secretArrayDisplay; //aca estoy indicando que la palabra secreta va en el parrafo.
// console.log(secretArrayDisplay);
// //Se trabajará comparando e iterando lettersArray en función a la letra que pone usuario
// const userLetter = document.querySelector("#input").value;
// for (let letter of lettersArray) {
//   if (userLetter === letter) {
//     //aquí cambiamos el array que se muestra en pantalla (displayArray) displayArray[i] === letra
//   }
// }

// console.log(userLetter);
// //Crear en html una sección (un displayArray?) con los mismos caracteres (secretWord.length) que secretWord
