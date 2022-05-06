"use strict";
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

const secretWord = palabras[random].toUpperCase(); //secretWord es la palabra random que tiene que aparecer en el texto
console.log(secretWord);
const lettersArray = secretWord.split(""); // ["m", "e", "s", "a"](esta no aparece en pantalla) [-,-,s,a](si aparece en pantalla) usserLetter ="a" contador(imagen)=1

// Aqui generamos otro array con tantos guiones como lettersArray
const guionesArray = [];
for (let i = 0; i < secretWord.length; i++) {
  guionesArray.push("_");
}
const main = document.querySelector("main");

// Hay que juntar guionesArray en una string
const guessWord = guionesArray.join("");
console.log(guessWord);
const p = document.getElementById("guessWord");
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
  const guessLetter = document.querySelector("#input").value.toUpperCase();
  //Quitamos el valor de la casilla una vez se envia la guessLetter
  form.elements.input.value = "";
  let userGuessed = false;
  //comparamos con lettersArray y desvelamos en guionesLetter la letra, si está
  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] === guessLetter) {
      guionesArray[i] = guessLetter; //ver letter-spacing en CSS
      userGuessed = true;
    }
  }
  if (!userGuessed) {
    errorCounter += 1;
  }
  //Agregamos el nuevo contenido al p de la pantalla
  p.textContent = guionesArray.join("");
  console.log(errorCounter);

  //Vemos si quedan guiones en guionesArray, en caso FALSE, la palabra esta completa.
  guionesArray.includes("_");
  //Creamos un Array con los guiones que quedan en guionesArray

  if (!guionesArray.includes("_") && errorCounter < 6) {
    const h2 = document.createElement("h2");
    main.append(h2);
    h2.textContent = "Enhorabuena, has completado la palabra";
    document.getElementById("input").disabled = true;
    document.getElementById("submit_id").disabled = true;
  }

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
    const h2 = document.createElement("h2");
    main.append(h2);
    h2.textContent = "Ooops, no ha podido ser...sigue jugando";
    document.getElementById("input").disabled = true;
    document.getElementById("submit_id").disabled = true;
  } else {
    document.querySelector("#images").src = "/imagenes/7.png";
  }
});
// boton

const reiniciarButton = document.getElementById("reiniciar");

reiniciarButton.addEventListener("click", () => {
  location.reload();
});
