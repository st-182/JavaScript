let num = 14.58;
let num0 = new Number(14.58);

let num1 = Math.ceil(14.58);
let num2 = Math.floor(14.58);
let num3 = Math.round(14.58);
let num4 = Math.trunc(14.58);
console.log(num);
console.log(num0);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
// Math.min minimum from array (1,3,5,6)
// Math.max
// Math.random
// num.toFixed(n)
const num5 = 14.23424234;
const num6 = 543;
console.log(`num5`, num5);
console.log(`num5.toFixed`, num5.toFixed(2));
console.log(`num5.toFixed`, +num5.toFixed(2));
console.log(`num6`, num6);

console.log(`parsFloat`, parseFloat(num5.toFixed(2)));
console.log(`parsInt`, parseInt(num5.toFixed(2)));

function mathRandom(num) {
  return Math.random() * num;
}
let arr = [];
let number;
for (i = 1; i < 6; i++) {
  let number = mathRandom(9);
  console.log(number.toFixed(2));
  arr[i - 1] = number.toFixed(2);
}
console.log(arr);
console.log(Math.max(arr[0], arr[2], arr[3], arr[4], arr[1]));
