//imports
import { GET_ALL_CARS_URI } from '../modules/endpoints/endpoints.js';

//variables
//--DOM elemnts
const latestCarsElement = document.querySelector('#latest-cars');
//functions
const showCars = async () => {
  let cars = await fetch(GET_ALL_CARS_URI);
  let data = await cars.json();

  latestCarsElement.innerHTML = data.reduce((total, item) => {
    total += item.cars.reduce((carsTotal, carsItem) => {
      carsTotal += `
      <div class="car card-shadow" id="${carsItem._id}">
      <h4>${carsItem.make} ${carsItem.model}</h4>
      <p>Year: ${carsItem.year}</p>
      <p>Price: ${carsItem.price.toFixed(2)}</p>
      <p>Owner: ${item.name} ${item.surname}</p>
      <p>Email: ${item.email}</p>
      </div>
      `;

      return carsTotal;
    }, '');
    return total;
  }, '');
};
//events
document.addEventListener('DOMContentLoaded', showCars);
