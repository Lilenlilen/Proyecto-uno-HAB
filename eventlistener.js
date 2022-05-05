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

  //Imagenes dependiendo de errores // cambiar el src con una imagen fija en html (la del soporte)
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
    document.getElementById("input").disabled = true;
    document.getElementById("submit_id").disabled = true;
  } else {
    display_image("solo el soporte");
  }
});
// boton: reinicias los

const reiniciarButton = document.getElementById("reiniciar");

reiniciarButton.addEventListener("click", () => {
  location.reload();
});
