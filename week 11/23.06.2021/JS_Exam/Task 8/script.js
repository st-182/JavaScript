/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
// Object constructor ES5
function Calculator(name) {
  this.name = name;
}

//Creating object methods using prototype
Calculator.prototype.sum = function (num1, num2) {
  return num1 + num2;
};
Calculator.prototype.subtraction = function (num1, num2) {
  return num1 - num2;
};
Calculator.prototype.multiplication = function (num1, num2) {
  return num1 * num2;
};
Calculator.prototype.division = function (num1, num2) {
  return num1 / num2;
};

//Testing object and methods
let testObject = new Calculator(`test text`);
console.group(`test of Calculator`);
console.log("sum: ", testObject.sum(2, 4));
console.log("subtraction: ", testObject.subtraction(2, 4));
console.log("multiplication: ", testObject.multiplication(2, 4));
console.log("division: ", testObject.division(2, 4));
console.groupEnd(`test of Calculator`);
