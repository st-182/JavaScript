const btnShowAllCars = document.querySelector(`#get`);
const btnShowOneCar = document.querySelector(`#getone`);
const output = document.querySelector(`#output`);
const output2 = document.querySelector(`#output2`);
const select = document.querySelector(`select`);
const selectCar = document.querySelector(`#select-car`);
const formPostElement = document.querySelector(`form`);
const formUpdateElement = document.querySelector(`#form2`);
const formDeleteElement = document.querySelector(`#form3`);
const selectCarToDelete = document.querySelector(`#select-car-to-delete`);
const responceFromPOSTcarElement = document.querySelector(
  `#responce-from-server`
);
const responceFromUpdateCarElement = document.querySelector(
  `#responce-from-server2`
);
const responceFromDeleteCarElement = document.querySelector(
  `#responce-from-server3`
);

console.log(select.value);

function showAllCars() {
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
        <div class="col bg-light text-center p-1 gap-2">
            <h2>ID:${item._id}</h2>
            <h3 class="text-info">Make: ${item.make}</h3>
            <h3>Model: ${item.model}</h3>
            <h3>Year: ${item.year}</h3>
            <h3>Color: ${item.color}</h3>
        </div>
            `;
        // console.log(car);
        return acc + car;
      }, ``);
    });
}
function showOneCar() {
  // console.log(select.value);
  fetch(`http://localhost:5000/api/cars/${select.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output2.innerHTML = `
            <h3>${data.make} ${data.model} ${data.year} ${data.color}</h3>
            `;
    });
}
const createOptionsElemets = () => {
  fetch("http://localhost:5000/api/cars")
    .then((res) => res.json())
    .then((data) => {
      select.innerHTML = data.reduce((acc, item) => {
        let car = `
                <option value="${item._id}">${item.model}</option>
            `;
        return acc + car;
      }, ``);
      selectCar.innerHTML = data.reduce((acc, item) => {
        let car = `
                <option value="${item._id}">${item.model}</option>
            `;
        return acc + car;
      }, ``);

      selectCarToDelete.innerHTML = data.reduce((acc, item) => {
        let car = `
                <option value="${item._id}">${item.model}</option>
            `;
        return acc + car;
      }, ``);
    });
};

const postCar = (e) => {
  e.preventDefault();
  let data = {
    make: e.target[0].value,
    model: e.target[1].value,
    year: +e.target[2].value,
    color: e.target[3].value,
  };
  console.log(data);
  fetch(`http://localhost:5000/api/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) createOptionsElemets();
      return res.json();
    })
    .then(
      (data) => console.log(data)
      // (responceFromPOSTcarElement.innerHTML += `<p>${data.message}: ${
      //   data.cars[data.cars.length - 1].id
      // },${data.cars[data.cars.length - 1].make}, ${
      //   data.cars[data.cars.length - 1].year
      // } </p>`)
    )
    .catch((err) => console.log(err));
};

const updateCar = (e) => {
  e.preventDefault();
  let data = {
    make: e.target[1].value,
    model: e.target[2].value,
    year: +e.target[3].value,
    color: e.target[4].value,
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
      console.log(res.status);
      if (res.status === 200) createOptionsElemets();
      return res.json();
    })
    .then(
      (data) => (responceFromUpdateCarElement.innerHTML += `<p>done</p>`)
      // (responceFromUpdateCarElement.innerHTML += `<p>${data.message}: ${
      //   data.cars[data.cars.length - 1].id
      // },${data.cars[data.cars.length - 1].make}, ${
      //   data.cars[data.cars.length - 1].year
      // } </p>`)
    )
    .catch((err) => console.log(err));
};

const deleteCar = (e) => {
  e.preventDefault();
  fetch(`http://localhost:5000/api/cars/${e.target[0].value}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) createOptionsElemets();
      responceFromDeleteCarElement.innerHTML += `<p>Server responce:${res.status}</p>`;
      return res.json();
    })
    .then(
      (data) =>
        (responceFromDeleteCarElement.innerHTML += `<p>${data.message}</p>`)
    )
    .catch((err) => console.log(err));
};

btnShowAllCars.addEventListener(`click`, showAllCars);
btnShowOneCar.addEventListener(`click`, showOneCar);
document.addEventListener(`DOMContentLoaded`, createOptionsElemets);
formPostElement.addEventListener(`submit`, postCar);
formUpdateElement.addEventListener(`submit`, updateCar);
formDeleteElement.addEventListener(`submit`, deleteCar);
