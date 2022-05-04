"use strict";
const lettersArray = ["c", "a", "s", "a"];
const guessLetter = "p";
const guionesArray = ["_", "_", "_", "_"];
let errorCounter = 0;
let userGuessed = false;
for (let i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i]);
  if (lettersArray[i] === guessLetter) {
    guionesArray[i] = guessLetter;
    userGuessed = true;
  }
}
if (!userGuessed) {
  errorCounter += 1;
}
console.log(guessLetter);
console.log(errorCounter);
function display_image(src, width, height, alt) {
  let image = document.createElement("img");
  image.src = src;
  image.width = width;
  image.height = height;
  image.alt = alt;
  document.body.appendChild(image);
}

if (errorCounter === 1) {
  display_image("./imagenes/1.png", 250, 330, "primer error");
} else if (errorCounter === 2) {
  display_image("./imagenes/2.png", 250, 330, "segundo error");
} else if (errorCounter === 3) {
  display_image("./imagenes/3.png", 250, 330, "tercer error");
} else if (errorCounter === 4) {
  display_image("./imagenes/4.png", 250, 330, "cuarto error");
} else if (errorCounter === 5) {
  display_image("./imagenes/5.png", 250, 330, "quinto error");
} else if (errorCounter === 6) {
  display_image("./imagenes/6.png", 250, 330, "Game Over");
} else {
  display_image("solo el soporte");
}
