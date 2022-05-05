//con un evento onclick (asociado a un botón) que llamé a la funcion resetear sin parametros y que reseté la puntuacion, las cartas a mostrar etc. A continuación, que modifique el DOM (los elementos donde está la puntuación, las cartas etc).

"use strict";

const reiniciarButton = document.getElementById("reiniciar");

reiniciarButton.addEventListener("click", () => {
  location.reload();
});
