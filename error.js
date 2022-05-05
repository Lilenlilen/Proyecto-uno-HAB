"use strict";

const validateGuessLetter = (guessLetter) => {
  try {
    if (!isNaN(guessLetter))
      throw new TypeError("El dato introducido debe ser una letra");
  } catch (TypeError) {
    console.error(error.message);
    window.alert("El dato introducido debe ser una letra");
  }
};
