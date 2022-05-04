"use strict";
const lettersArray = ["c", "a", "s", "a"];
const guionesArray = ["_", "_", "_", "_"];
const guessLetter = "p";

for (let i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i]);
  if (lettersArray[i] === guessLetter) {
    guionesArray[i] = guessLetter;
  }
}

console.log(guionesArray);
