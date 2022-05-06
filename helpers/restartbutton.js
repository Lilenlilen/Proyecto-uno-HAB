"use strict";
const reiniciarButton = document.getElementById("reiniciar");

reiniciarButton.addEventListener("click", () => {
  guionesArray = 0;
  errorCounter = 0;
  document.getElementById("input").disabled = false;
  document.getElementById("submit_id").disabled = false;
  gameStart();
  //   location.reload();
});
//No termina de funcionar porque le pasa los arrays antiguos y no sirve ponerlos a cero (guionesArray.length = 0;) porque está fuera de scope
