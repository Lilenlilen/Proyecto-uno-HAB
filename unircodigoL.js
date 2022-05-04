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

const guionesArray = ["_", "_", "_", "_"];
//creamos constante form
const form = document.forms.input;
//creamos un eventListener que ejecute la accion de comparar y mostrar letras
form.addEventListener("submit", (event) => {
  //cancelamos la accion por defecto del formulario
  event.preventDefault();
  //recogemos la guessLetter del formulario
  const guessLetter = document.querySelector("#input").value;
  //comparamos con lettersArray y desvelamos en guionesLetter la letra, si está

  for (let i = 0; i < lettersArray.length; i++) {
    console.log(lettersArray[i]);
    if (lettersArray[i] === guessLetter) {
      guionesArray[i] = guessLetter;
    }
  }

  //   guionesArray.map(() => {});
  //   console.log(guionesArray);
  //   //Quitamos el valor de la casilla una vez se envia la guessLetter
  form.elements.input.value = "";
  //Aqui hay que ver si se cambia el textContent de p o no...
  const main = document.querySelector("main");
  for (let i = 0; i < lettersArray.length; i++) {
    const p = document.createElement("p");
    main.append(p);
    p.textContent = guionesArray[i];
  }
});
