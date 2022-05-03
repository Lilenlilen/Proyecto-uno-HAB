"use strict";

const main = document.querySelector("main");
const secretWord = "Tomate"; //Esta palabra está hidden en el html y variará

const lettersArray = [];
for (let i = 0; i < secretWord.length; i++) {
  console.log(secretWord.charAt(i));
  console.log(secretWord[i]); //Hace lo mismo que el .charAt(i)
  lettersArray.push(secretWord[i]);
}
console.log(lettersArray);

console.log(secretWord.length);
//Se trabajará comparando e iterando lettersArray en función a la letra que pone usuario

const userLetter = "m";

for (let letter of lettersArray) {
  if (userLetter === letter) {
    //aquí cambiamos el array que se muestra en pantalla (displayArray) displayArray[i] === letra
  }
}

//Crear en html una sección (un displayArray?) con los mismos caracteres (secretWord.length) que secretWord
const secretWordCharacters = () => {
  const p = document.createElement("p");
  main.append(p);
  p.textContent = secretWord.padStart(secretWord.length, "_");
};

secretWordCharacters();
