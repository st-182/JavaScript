//Imports
import {
  GET_USER_URI,
  DELETE_CAR_URI,
} from '../modules/endpoints/endpoints.js';

// ---- USER INFO ---
//-------------------
//variables
const userNameElement = document.querySelector('#user-name');
const userInfoElement = document.querySelector('#user__info');
//functions
//-- get user data
const getUser = () => {
  let userFromLocalStorageId = JSON.parse(localStorage.getItem('user'));
  console.log(userFromLocalStorageId);

  if (userFromLocalStorageId) {
    return fetch(GET_USER_URI + userFromLocalStorageId)
      .then((res) => res.json())
      .then((data) => {
        showUser(data);
        showCars(data);
      });
  } else {
    location.href = 'http://127.0.0.1:5500/1_frontend/pages/login.html';
  }
  console.log(user);
};
//-- show user data
const showUser = (userData) => {
  userNameElement.innerText = userData.name;

  userInfoElement.innerHTML = `
  <div><i class="fas fa-user fa-2x"></i></div>
  <h3>${userData.name} ${userData.surname}</h3>
  <p>${userData.email}</p>
  <p>Cars for sale: ${userData.cars.length}</p>
  <button class="btn-primary" id="logoutUser">Logout</button>
  `;

  const logoutUserBtn = document.querySelector('#logoutUser');
  logoutUserBtn.addEventListener('click', logoutUser);
};

//Logout user
const logoutUser = () => {
  localStorage.removeItem('user');
  location.href = 'http://127.0.0.1:5500/1_frontend/index.html';
};
//events
document.addEventListener('DOMContentLoaded', getUser);

// ---- USER CARS INFO ---
//----------------------
//variables
const userCarsListElement = document.querySelector('#user__cars-list');
//functions
// -- show user cars for sale
const showCars = (userData) => {
  console.log(userData.cars);
  if (userData.cars.length) {
    userCarsListElement.innerHTML = `
  <table>
  <thead>
  <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Price</th>
      <th>Action</th>
  </tr>
  </thead>
  <tbody>
  ${userData.cars.reduce((total, item) => {
    total += `
    <tr>
    <td>${item.make}</td>
    <td>${item.model}</td>
    <td>${item.year}</td>
    <td>$${item.price}</td>
    <td><button class="btn-primary btn-delete-car" data-user-id="${userData._id}" data-car-id="${item._id}">Delete</button></td>
    </tr>
    `;
    return total;
  }, ``)}
  </tbody>
  </table>
  `;

    const deleteCarBtns = document.querySelectorAll('.btn-delete-car');
    console.log(deleteCarBtns);
    deleteCarBtns.forEach((btn) => btn.addEventListener('click', deleteCar));
  } else {
    userCarsListElement.innerHTML = `<p>Currently no car advert added!</p>`;
  }
};
//--delete car
const deleteCar = (e) => {
  let carToDelete = {
    userId: e.target.dataset.userId,
    carId: e.target.dataset.carId,
  };

  return fetch(DELETE_CAR_URI + carToDelete.userId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carToDelete),
  })
    .then((res) => res.json())
    .then((data) => {
      showUser(data);
      showCars(data);
    });
};
//events
