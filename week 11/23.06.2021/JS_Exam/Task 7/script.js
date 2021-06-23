/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */

// Variables
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// Functions
const showObjectKeys = (anyObject) => {
  return Object.keys(anyObject);
};
