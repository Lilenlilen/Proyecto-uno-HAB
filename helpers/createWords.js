"use strict";
const createWordsLists = () => {
  const ul = document.querySelector("ul");

  const formWords = document.forms.formWords;
  const words = JSON.parse(localStorage.getItem("words")) || [];

  for (const word of words) {
    const li = document.createElement("li");

    li.textContent = word;
    ul.append(li);
  }

  formWords.addEventListener("submit", (event) => {
    event.preventDefault();
    const formWordsData = new FormData(formWords);
    const formWordsValues = Object.fromEntries(formWordsData);

    const li = document.createElement("li");
    ul.append(li);
    li.textContent = formWordsValues.word;
    formWords.elements.word.value = "";
    console.log(formWordsValues);

    tasks.push(formWordsValues.word);
    const JSONWords = JSON.stringify(words);

    localStorage.setItem("words", JSONWords);
  });
};
//return something from this function
createWordsLists();
