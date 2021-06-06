const arr = [];
const newArr = [];
for (i = 0; i < 15; i++) {
  arr[i] = Math.floor(Math.random() * 15);
}
console.log(arr);
arr.forEach((item) => {
  newArr.push(item + 100);
});
console.log(arr);
console.log(newArr);
