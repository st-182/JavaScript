// --- OOP (Creating objects in JS) ---
//-------------------------------------
// -- object literal
let user = {
  name: "John", // savybes (key:value poros)
  surname: "Smith",
  age: 25,
  greeting: function (language = "english") {
    if (language === "english") {
      return `Hello, ${this.name} ${this.surname}!`;
    } else if (language === "lithuanian") {
      return `Labas, ${this.name} ${this.surname}!`;
    }
  }, // metodai
};
// objekto vertes pakeitimas
user.name = "Alex";
// objekto savybes panaikinimas
delete user.age;
// console.log(user);
// -- constructor function
// --- ES5
// ---- sukuriama konstruktoriaus funkcija
function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}
// ---- priskirimi metodai naudojant prototipa
User.prototype.greeting = function () {
  return `Hello, ${this.name} ${this.surname}!`;
};
// ---- sukuriamams objektas is konstruktoriaus klases
let userOne = new User("Peter", "Griffin", 35);
// console.log(userOne.greeting());
// --- ES6
class Car {
  constructor(_make, _model, _year) {
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }
  startCar() {
    return `${this.make} ${this.model} stared!`;
  }
}
let audi = new Car("Audi", "A6", 2020);
let opel = new Car("Opel", "Astra", 2020);
// --- objektu sujungimas
let newObjOne = Object.assign({}, audi, user);
let newObjTwo = { ...audi, ...user };
// console.log('newObjOne', newObjOne);
// console.log('newObjTwo', newObjTwo);
// -- formos validavimas
const formElement = document.querySelector("form");
const nameElement = document.querySelector('input[type="text"]');
const passwordElement = document.querySelector('input[type="password"]');
class FormPasswordValidator {
  constructor(form, name, password) {
    this.form = form;
    this.name = name;
    this.password = password;
  }
  submitForm(e) {
    e.preventDefault();
    return this.validateForm();
  }
  validateForm() {
    let isValidPassword = this.password.value.length >= 8 ? true : false;
    if (isValidPassword) {
      return this.loggedInSuccess();
    } else {
      return this.loggedInFailed();
    }
  }
  loggedInSuccess() {
    console.log("Logged In Success");
  }
  loggedInFailed() {
    console.log("Logged In Failed");
  }
}
let loggeIn = new FormPasswordValidator(
  formElement,
  nameElement,
  passwordElement
);
formElement.addEventListener("submit", (e) => loggeIn.submitForm(e));
//---------------------------
//------ Array methods ------
//---------------------------
// --- creating Movies class to create objects
class Movie {
  constructor(name, director, year, actors) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.actors = actors;
  }
}
// --- creating objects based on Movies class
let titanic = new Movie("Titanic", "James Cameron", 1997, [
  "Leonardo DiCaprio",
  "Kate Winslet",
]);
let wolfOfWallStreet = new Movie(
  "The Wolf of Wall Street",
  "Martin Scorsese",
  2013,
  ["Leonardo DiCaprio", "Jonah Hill"]
);
let cars = new Movie("Cars", "John Lasseter", 2006, [
  "Owen Wilson",
  "Paul Newman",
]);
let batman = new Movie("Batman Begins", "Christopher Nolan", 2005, [
  "Christian Bale",
]);
// --- adding single movies to moviesArray
let moviesArray = [titanic, wolfOfWallStreet, cars, batman];
console.log("moviesArray", moviesArray);
// --- map
let moviesWithPropertyName = moviesArray.map((movie, index, array) => {
  return {
    ...movie,
    director: `Director: ${movie.director}`,
  };
});
console.log("moviesWithPropertyName", moviesWithPropertyName);
// ---filter
let moviesCreatedBefore2000 = moviesArray.filter(
  (movie, index, array) => movie.year < 2000
);
console.log("moviesCreatedAfter2000", moviesCreatedBefore2000);
let moviesCreatedAfter2000 = moviesArray.filter(
  (movie, index, array) => movie.year >= 2000
);
console.log("moviesCreatedAfter2000", moviesCreatedAfter2000);
const filterMoviesByActor = (arr, actor) =>
  arr.filter((item, index, arr) => item.actors.includes(actor));
console.log(
  "filterMoviesByActor",
  filterMoviesByActor(moviesArray, "Christian Bale")
);
const moviesWithTwoAndMoreActors = (arr) =>
  arr.filter((item, index, array) => item.actors.length >= 2);
console.log(
  "moviesWithTwoAndMoreActors",
  moviesWithTwoAndMoreActors(moviesArray)
);
// --- reduce
let movieNamesAndDirectors = moviesArray.reduce((total, currentItem) => {
  total[currentItem.name] = currentItem.director;
  return total;
}, {});
console.log("movieNamesAndDirectors", movieNamesAndDirectors);
