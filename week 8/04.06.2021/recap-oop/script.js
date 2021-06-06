// OOP creation of Objects
let user = {
  name: `John`,
  surname: `Smith`,
  age: 25,
  greeting: function (language = `english`) {
    if (language === `english`) {
      return `Hello, ${this.name} ${this.surname}`;
    } else if (language === `lithuanian`) {
      `Labas, ${this.name} ${this.surname}`;
    }
  }, // methods
};

// Constructor function
// ES5
function User(a, b, c) {
  this.name = a;
  this.surname = b;
  this.age = c;
}

let userOne = new User(`Peter`, `Jonson`, 35);
console.log(userOne);

// ES6
let chars = ["A", "B", "A", "C", "B"];

const arrOne = chars
  .map((item) => item)
  .filter((item, index) => {
    return chars.indexOf(item) === index;
  });
console.log(arrOne);
