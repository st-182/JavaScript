// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20 %.
// Your tasks: 1. Calculatethe tip, depending on the bill value.
// Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!);
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// §Data 1: Test for bill values 275, 40 and 430
// Hints: §To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
// §Value X is between 50 and 300, if it's >= 50 && <= 300😉

// Task 1 - ternary if

// let tip;
// let bill = 430;
// bill >= 50 && bill <= 300
//   ? console.log(
//       `In this case your  bill is ${bill} and your tip summ is ${(tip =
//         bill * 0.15)} and together is ${bill + tip}`
//     )
//   : console.log(
//       `In that case your  bill is ${bill} and your tip summ is ${(tip =
//         bill * 0.2)} and together is ${bill + tip}`
//     );

// Task 2 Cycles

// write loop that iterates from 0 to 20 and does console.log() if iteration value is even number
// for (let i = 0; i <= 20; i++) {
//   i % 2 > 0 ? console.log(`--- odd ${i} ---`) : console.log(`even ${i}`);
// }

// for (let i = 0; i <= 20; i++) {
//   i % 2 > 0 ? null : console.log(`even ${i}`);
// }

// for (let i = 0; i <= 20; i = i + 2) {
//   console.log(`even ${i}`);
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(i++ + ` even`);
// }

// Task 3 Array and Cycle

// let array = [1, 5, 15, 0.3, -9, -63, 252345234, 15];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// let arrayOfStrings = [`labas`, `vakaras`, `ponios`, `ir`, `ponai`];
// for (let i = 0; i < arrayOfStrings.length; i++) {
//   console.log(arrayOfStrings[i]);
// }

// Task 4 Array and Cycle
// let i = 0;
// while (i < 20) {
//   console.log(`even ${i}`);
//   i = i + 2;
// }
// do {
//   i % 2 > 0 ? null : console.log(`even ${i}`);
//   i++;
// } while (i < 20);
// let arrayOfBooleans = [
//   true,
//   false,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   false,
// ];
// console.log(arrayOfBooleans.length);

// while (i < arrayOfBooleans.length) {
//   arrayOfBooleans[i] = !arrayOfBooleans[i];
//   console.log(` So, ${arrayOfBooleans[i]} , number in array ${i}`);
//   i++;
// }

// for (i = 0; i < arrayOfBooleans.length; i++) {
//   arrayOfBooleans[i] = !arrayOfBooleans[i];
//   console.log(arrayOfBooleans[i]);
// }

// Document Object Model - DOM