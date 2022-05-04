"use strict";
const lettersArray = ["c", "a", "s", "a"];
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
  guionesArray.map(() => {});
  console.log(guionesArray);
  //Quitamos el valor de la casilla una vez se envia la guessLetter
  form.elements.input.value = "";
  //Aqui hay que ver si se cambia el textContent de p o no...
  //   const main = document.querySelector("main");
  //   for (let i = 0; i < lettersArray.length; i++) {
  //     const p = document.createElement("p");
  //     main.append(p);
  //     p.textContent = guionesArray[i];
  //   }
});
