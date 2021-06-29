let outputElement = document.querySelector(`#output`);
console.log(`done`);
function fetchFn() {
  fetch(`http://localhost:8080/`)
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data.brands);
      data.brands.forEach((brand) => {
        outputElement.appendChild(document.createElement(`li`)).textContent =
          brand;
      });
    });
  console.log(`done`);
}
document.addEventListener(`DOMContentLoaded`, fetchFn);
