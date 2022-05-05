"use strict";
const lettersArray = ["c", "a", "s", "a"];
const guionesArray = ["_ ", "_ ", "_ ", "_ "];
const main = document.querySelector("main");

// Hay que juntar guionesArray en una string
const guessWord = guionesArray.join("");
console.log(guessWord);
const p = document.querySelector("p");
p.textContent = guessWord;
//ponemos errores a 0
let errorCounter = 0;

//creamos constante form
const form = document.forms.input;
//creamos un eventListener que ejecute la accion de comparar y mostrar letras
form.addEventListener("submit", (event) => {
  //cancelamos la accion por defecto del formulario
  event.preventDefault();
  //recogemos la guessLetter del formulario
  const guessLetter = document.querySelector("#input").value;
  let userGuessed = false;
  //comparamos con lettersArray y desvelamos en guionesLetter la letra, si está
  for (let i = 0; i < lettersArray.length; i++) {
    console.log(lettersArray[i]);
    if (lettersArray[i] === guessLetter) {
      guionesArray[i] = guessLetter + " ";
      userGuessed = true;
    }
  }
  if (!userGuessed) {
    errorCounter += 1;
  }

  p.textContent = guionesArray.join("");
  console.log(errorCounter);
  console.log(guionesArray);
  //Quitamos el valor de la casilla una vez se envia la guessLetter
  form.elements.input.value = "";
  //Aqui se crean los p dependiendo de guionesArray
});
