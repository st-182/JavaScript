//---V1---
//--------

//API END POINTS
const SINGLE_JOKE_ENDPOINT = `https://api.chucknorris.io/jokes/random`;
// Variables
const singleJokesOutput = document.querySelector(`#joke`);
//Functions
document.addEventListener(`DOMContentLoaded`, () => {
  fetch(SINGLE_JOKE_ENDPOINT)
    .then((responce) => responce.json())
    .then((data) => (singleJokesOutput.innerText = data.value));
});

//Events

//!

//---V2---
//--------

//API END POINTS
//after '=' sign must be category name
const SINGLE_JOKE_BY_CATEGORY_ENDPOINT = `https://api.chucknorris.io/jokes/random?category=`;
// Variables
//---dom
const form = document.querySelector(`form`);
const select = document.querySelector(`select`);
const singleJokeByCategoryOutput = document.querySelector(
  `#single-joke-by-category`
);
//---current joke category
let category = `animal`;
//Functions
const changeCurrentJokeCategory = (e) => {
  category = e.target.value;
};
const getJokeByCategory = (e) => {
  e.preventDefault();
  return fetch(SINGLE_JOKE_BY_CATEGORY_ENDPOINT + category)
    .then((responce) => responce.json())
    .then((data) => (singleJokeByCategoryOutput.innerText = data.value));
};

//Events
select.addEventListener(`change`, changeCurrentJokeCategory);
form.addEventListener(`submit`, getJokeByCategory);
