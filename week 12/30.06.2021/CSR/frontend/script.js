const btn = document.querySelector(`#get`);
const btn2 = document.querySelector(`#getone`);
const output = document.querySelector(`#output`);
const output2 = document.querySelector(`#output2`);
const select = document.querySelector(`select`);
const selectCar = document.querySelector(`#select-car`);
const formElement = document.querySelector(`form`);
const formElement2 = document.querySelector(`#form2`);
const responceElement = document.querySelector(`#responce-from-server`);
const responceElement2 = document.querySelector(`#responce-from-server2`);

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
            <h2>${item.year}</h2>
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
            <h3>${data.make} ${data.year}</h3>
            `;
    });
}
const optionsEl = () => {
  fetch("http://localhost:5000/api/cars")
    .then((res) => res.json())
    .then((data) => {
      select.innerHTML = data.reduce((acc, item) => {
        let car = `
                <option value="${item.id}">${item.id}</option>
            `;
        return acc + car;
      }, ``);
      selectCar.innerHTML = data.reduce((acc, item) => {
        let car = `
                <option value="${item.id}">${item.id}</option>
            `;
        return acc + car;
      }, ``);
    });
};

const postCar = (e) => {
  e.preventDefault();
  let data = {
    make: e.target[0].value,
    year: +e.target[1].value,
  };
  fetch(`http://localhost:5000/api/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) optionsEl();
      return res.json();
    })
    .then(
      (data) =>
        (responceElement.innerHTML += `<p>${data.message}: ${
          data.cars[data.cars.length - 1].id
        },${data.cars[data.cars.length - 1].make}, ${
          data.cars[data.cars.length - 1].year
        } </p>`)
    )
    .catch((err) => console.log(err));
};

const updateCar = (e) => {
  e.preventDefault();
  let data = {
    make: e.target[1].value,
    year: +e.target[2].value,
  };
  console.log(data);
  fetch(`http://localhost:5000/api/cars/${e.target[0].value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) optionsEl();
      return res.json();
    })
    .then(
      (data) =>
        (responceElement2.innerHTML += `<p>${data.message}: ${
          data.cars[data.cars.length - 1].id
        },${data.cars[data.cars.length - 1].make}, ${
          data.cars[data.cars.length - 1].year
        } </p>`)
    )
    .catch((err) => console.log(err));
};

btn.addEventListener(`click`, show);
btn2.addEventListener(`click`, showOne);
document.addEventListener(`DOMContentLoaded`, optionsEl);
formElement.addEventListener(`submit`, postCar);
formElement2.addEventListener(`submit`, updateCar);
