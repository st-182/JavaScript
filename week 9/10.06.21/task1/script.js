// Sukurkite index.html ir script.js failus. Index.html failo viduje bus matoma 3 mygtukai (<button>) ir vienas blokas atvaizdavimui (<div>). Priklausomai nuo paspausto mygtuko, atvaizavimo bloke bus matomi:
// -posts arba;
// -comments arba
// -toods
// Posts, Comments arba Toodos endpoint'us rasite šiame API: https://jsonplaceholder.typicode.com
const URL_comments = `https://jsonplaceholder.typicode.com/comments`;
const URL_todos = `https://jsonplaceholder.typicode.com/todos`;
const URL_posts = `https://jsonplaceholder.typicode.com/posts`;

const outputElement = document.querySelector(`#output`);
const btn1Element = document.querySelector(`#btn1`);
const btn2Element = document.querySelector(`#btn2`);
const btn3Element = document.querySelector(`#btn3`);

//A single function for all URLs
function output(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      outputElement.innerHTML = ``;
      data.slice(0, 10).forEach((element) => {
        outputElement.appendChild(document.createElement(`p`)).textContent =
          "Titile: " + (element.name ? element.name : element.title);
        outputElement.appendChild(document.createElement(`p`)).textContent =
          "Body: " + (element.body ? element.body : element.completed);
      });
    });
}

btn1Element.addEventListener(`click`, () => {
  output(URL_comments);
});
btn2Element.addEventListener(`click`, () => {
  output(URL_todos);
});
btn3Element.addEventListener(`click`, () => {
  output(URL_posts);
});
