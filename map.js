"use strict";
//jugamos hasta que errores =6. Errores=6 (gameOver y reset)
//jugamos hasta que la palabra sea completada...comprobar que guionesArray no tiene _
//imagenes....
const stopGame = () => {
  if (errorCounter === 6) {
    errorCounter = 0;
    //boton start  y se reinicia el juego}
  }
  if (guionesArray[i] !== "_") {
    console.log("Has ganado!");
    errorCounter = 0;
    //aparece boton start y se reinicia el juego
  }
};
//botón start... (event Listener){ se reinicia el juego}
