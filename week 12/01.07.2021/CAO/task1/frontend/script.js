// var
const myAPI = `http://localhost:5000/`;
const btn = document.querySelector(`button`);
// func
function go() {
  fetch(myAPI)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
function goPOST() {
  fetch(myAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `Mazda`,
      model: `Premacy`,
      country: `Lithuania`,
      driver: `Aristidas`,
    }),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => console.log(data))

    .catch((error) => console.log(error));
}
// events
document.addEventListener(`DOMContentLoaded`, go);
btn.addEventListener(`click`, goPOST);
