console.log(`one`);
// ***** Object Literals *****
const user = {
  name: `Peter`,
  surname: `Levinson`,
  age: 34,
  friends: [`John Smith`, `Alex Ferguson`],
  "friend-list": [`John Smith`, `Alex Ferguson`],
  //   "friend-list": [John, Alex],
  address: {
    city: `London`,
    country: `UK`,
  },
  hasCar: true,
};
console.log(user[`friend-list`]);
// ***** Constructors & This *****
function Objectss(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}
let tesla = Objectss("Tesla", 10000, 100);
console.log(Objectss(1, 10000, 100));
// ***** Prototypes & Inheritence *****

// ***** ES6 Classes & Subclasses *****
class City {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  getIntroduction() {
    return `${this.name} is in ${this.country}`;
  }
}
// class sdfjlsdkjfs extends Objectss
