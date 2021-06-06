// ********** 1 DALIS **********
// 1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Product. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category (bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:
// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");
// 1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;
// 2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
// 3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:
// 3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//  - kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
//  - arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos;
//  - arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;

class Product {
  constructor(name, price, salePrice, category) {
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
    this.category = category;
  }
  getPrice() {
    return `"${this.name}": ${this.price} Eur`;
  }
  getSalePrice() {
    let thePrice;
    this.salePrice
      ? (thePrice = `${this.salePrice} Eur`)
      : (thePrice = `this product is not on sale`);
    return `"${this.name}": ${thePrice}`;
  }
}
const one = new Product(`Nike pants`, 59.0, null, `Pants`);
const two = new Product(`Nike t-shirts`, 30, null, `T-shirts`);
const three = new Product(`Puma shoes`, 20, null, `Shoes`);
const four = new Product(`Adidas sweater`, 90, 70, `Sweaters`);
const five = new Product(`Adidas pants`, 30, 25, `Pants`);

console.log(one.getPrice());
console.log(one.getSalePrice());

const currentProducts = [one, two, three, four, five];

console.log(currentProducts);
// "T-shirts", "Pants", "Sweaters", "Shoes"
function multiFilter(arr, num, numString) {
  //  - kainą nuo/iki
  let filteredArr;
  if (numString === +numString) {
    filteredArr = arr
      .map((item) => item)
      .sort((a, b) => a.price > b.price)
      .filter((item) => item.price >= num && item.price < numString);
    return filteredArr;
  } else if (numString === numString + `` && numString === `nuo`) {
    filteredArr = arr
      .map((item) => item)
      .sort((a, b) => a.price > b.price)
      .filter((item) => item.price >= num);
    return filteredArr;
  } else if (numString === numString + `` && numString === `iki`) {
    filteredArr = arr
      .map((item) => item)
      .sort((a, b) => a.price < b.price)
      .filter((item) => item.price <= num);
    return filteredArr;
  }
}
console.log(multiFilter(currentProducts, 10, 31));
console.log(multiFilter(currentProducts, 20, `iki`));
console.log(multiFilter(currentProducts, 30, `nuo`));
