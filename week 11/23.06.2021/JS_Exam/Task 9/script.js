/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
// Object constructor ES6
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  //Creating methods using ES6
  wasExpensive() {
    return this.budget > 100000000 ? true : false;
  }
}

//Testing object and methods
let testObject1 = new Movie(`Cars`, `John Lasseter`, 120000000);
let testObject2 = new Movie(`Test Cars`, `any`, 100000000);
let testObject3 = new Movie(`Test Cars 2`, `any 2`, 1000);
console.group(`test of Movie`);
console.log("testObject1: ", testObject1.wasExpensive());
console.log("testObject2: ", testObject2.wasExpensive());
console.log("testObject3: ", testObject3.wasExpensive());
console.groupEnd(`test of Calculator`);
