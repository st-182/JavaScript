const btn = document.querySelector(`#get`);
const btn2 = document.querySelector(`#getone`);
const output = document.querySelector(`#output`);
const output2 = document.querySelector(`#output2`);
const select = document.querySelector(`select`);

console.log(select.value);

function show() {
  fetch("http://localhost:5000/api/cars")
    .then((res) => res.json())
    .then((data) => {
      //   data.forEach((item) => {
      //     output.innerHTML += `
      //         <h3>${item.id}</h3>
      //         <h2>${item.make}</h2>
      //         `;
      //   });
      output.innerHTML = data.reduce((acc, item) => {
        let car = `
            <h3>${item.id}</h3>
            <h2>${item.make}</h2>
            `;
        console.log(car);
        return acc + car;
      }, ``);
    });
}
function showOne() {
  fetch(`http://localhost:5000/api/cars/${select.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output2.innerHTML = `
            <h3>${data}</h3>
            `;
    });
}

btn.addEventListener(`click`, show);
btn2.addEventListener(`click`, showOne);
document.addEventListener(`DOMContentLoaded`, () => {
  fetch("http://localhost:5000/api/cars")
    .then((res) => res.json())
    .then((data) => {
      select.innerHTML = data.reduce((acc, item) => {
        let car = `
                <option value="${item.id}">${item.id}</option>
            `;
        return acc + car;
      }, ``);
    });
});
