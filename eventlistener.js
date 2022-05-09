"use strict";

// import { validateGuessLetter } from "./helpers/error.js"; //esto da error....
const palabras = [
  "sanguijuela",
  "cocodrilo",
  "emparedado",
  "lavadora",
  "patata",
  "camioneta",
  "brazo",
  "holograma",
  "farmacia",
  "libro",
  "masaje",
  "catedral",
  "lavabo",
  "elefante",
  "pizza",
  "foco",
  "amarillo",
  "cerveza",
  "regadera",
  "patio",
  "camilla",
  "tila",
  "kiwi",
];

const main = document.querySelector("main");
// const divBox = document.getElementById("divBox");
// const body = document.getElementById("body");
const popUpGameOver = () => {
  const h2 = document.createElement("h2");
  main.append(h2);
  h2.textContent = "Ooops, Pepito perdió su vida...";
  h2.style.backgroundColor = "red";
  document.getElementById("input").disabled = true;
  document.getElementById("submit_id").disabled = true;
};
const popUpWinner = () => {
  const h2 = document.createElement("h2");
  main.append(h2);
  h2.textContent = "Enhorabuena, has salvado a Pepito";
  document.getElementById("input").disabled = true;
  document.getElementById("submit_id").disabled = true;
};
let errorCounter = 0;
const errorImages = () => {
  if (errorCounter === 1) {
    document.querySelector("#images").src = "/imagenes/1.png";
  } else if (errorCounter === 2) {
    document.querySelector("#images").src = "/imagenes/2.png";
  } else if (errorCounter === 3) {
    document.querySelector("#images").src = "/imagenes/3.png";
  } else if (errorCounter === 4) {
    document.querySelector("#images").src = "/imagenes/4.png";
  } else if (errorCounter === 5) {
    document.querySelector("#images").src = "/imagenes/5.png";
  } else if (errorCounter === 6) {
    document.querySelector("#images").src = "/imagenes/6.png";
    popUpGameOver();
  } else {
    document.querySelector("#images").src = "/imagenes/7.png";
  }
};
const validateGuessLetter = (guessLetter) => {
  try {
    if (!isNaN(guessLetter))
      throw new TypeError("El dato introducido debe ser una letra");
  } catch (TypeError) {
    console.error(TypeError.message);
    window.alert("El dato introducido debe ser una letra");
  }
};
const gameStart = () => {
  const random = Math.floor(Math.random() * palabras.length);

  const secretWord = palabras[random].toUpperCase(); //secretWord es la palabra random que tiene que aparecer en el texto
  console.log(secretWord);
  const lettersArray = secretWord.split("");

  // Aqui generamos otro array con tantos guiones como lettersArray
  const guionesArray = [];
  for (let i = 0; i < secretWord.length; i++) {
    guionesArray.push("_");
  }

  // Hay que juntar guionesArray en una string
  const guessWord = guionesArray.join("");
  console.log(guessWord);
  const p = document.getElementById("guessWord");
  p.textContent = guessWord;

  //creamos constante form
  const form = document.forms.input;
  //creamos un eventListener que ejecute la accion de comparar y mostrar letras
  form.addEventListener("submit", (event) => {
    //cancelamos la accion por defecto del formulario
    event.preventDefault();
    //recogemos la guessLetter del formulario
    const guessLetter = document.querySelector("#input").value.toUpperCase();
    validateGuessLetter(guessLetter);
    //Quitamos el valor de la casilla una vez se envia la guessLetter
    form.elements.input.value = "";
    let userGuessed = false;

    //comparamos con lettersArray y desvelamos en guionesArray
    for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i] === guessLetter) {
        guionesArray[i] = guessLetter;
        userGuessed = true;
      }
    }
    if (!userGuessed) {
      errorCounter += 1;
    }
    console.log(lettersArray);
    console.log(guionesArray);
    console.log(errorCounter);
    //Agregamos el nuevo contenido al p de la pantalla
    p.textContent = guionesArray.join("");
    //Creamos un Array con los guiones que quedan en guionesArray

    if (!guionesArray.includes("_") && errorCounter < 6) {
      popUpWinner();
    }
    errorImages();
  });
};
gameStart();

// boton reiniciar
const restartButton = document.getElementById("reiniciar");

restartButton.addEventListener("click", () => {
  location.reload();
});
