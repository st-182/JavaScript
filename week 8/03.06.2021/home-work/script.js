//********** 1 DALIS **********
//1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Product. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category (bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:
class Product {
  constructor(pName, price, salePrice, category) {
    this.pName = pName;
    this.price = price;
    this.salePrice = salePrice;
    this.category = category;
    this.pNameNprice = function () {
      console.log(`Product ${thispName}: regular price:${this.price}`);
    };
    this.isItemOnSale = function () {
      if (this.salePrice) {
        console.log(
          `Pasrinktam produktui, ${
            this.pName
          } nuolaida yra taikoma. ir jo galutine kaina yra ${
            this.salePrice
          } ir nuolaida - ${
            100 - (this.salePrice / this.price).toFixed(2) * 100
          }%`
        );
      } else {
        console.log(
          `Pasrinktam produktui, ${this.pName} nuolaida yra netaikoma`
        );
      }
    };
  }
}
// class Product {
//   constructor(pName, price, salePrice, category) {
//     this.pName = pName;
//     this.price = price;
//     this.salePrice = salePrice;
//     this.category = category;
//     this.pNameNprice = function () {
//       console.log(`Product ${thispName}: regular price:${this.price}`);
//     };
//     this.isItemOnSale = function () {
//       if (this.salePrice) {
//         console.log(
//           `Pasrinktam produktui, ${this.item} nuolaida yra netaikoma`
//         );
//       } else {
//         console.log(
//           `Pasrinktam produktui, ${this.item} nuolaida yra taikoma. ir jo galutine kaina yra ${this.salePrice}`
//         );
//       }
//     };
//   }
// }
const kepure = new Product("Adidas Originals cap", 30, 25, "head");
const kedai = new Product("Nike Air", 75, null, "feet");
const kelnes = new Product("Adidas Black", 40, 25, "legs");
const treningasOne = new Product(
  "Adidas Originals Purple Haze",
  120,
  80,
  "body"
);
const treningasTwo = new Product("Nice Pure Blak", 150, 100, "body");
const currentProducts = [kepure, kedai, kelnes, treningasOne, treningasTwo];
console.log(currentProducts);
let filtravimas = (productsArray, arg1, arg2) => {
  if (typeof arg2 === "string") {
    if (arg2 === "nuo") {
      return productsArray.filter((product) => {
        let price = product.salePrice ? product.salePrice : product.price;
        return price >= arg1;
      });
    } else if (arg2 === "iki") {
      return productsArray.filter((product) => {
        let price = product.salePrice ? product.salePrice : product.price;
        return price <= arg1;
      });
    }
  } else {
    return productsArray.filter((product) => {
      let price = product.salePrice ? product.salePrice : product.price;
      return price >= arg1 && price <= arg2;
    });
  }
};
console.log(filtravimas(currentProducts, 50, "iki"));
//1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");
//1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;
//2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
//3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:
//3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//- kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
//- arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos;
//- arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;

// ********** 2 DALIS **********
// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
function showCategory(cat) {
  const FilteredCurrentProducts = currentProducts
    .map((item) => item)
    .filter((item) => item.category === cat);
  return FilteredCurrentProducts;
}
console.log(showCategory(`body`));
// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
function showSalePriceItems() {
  const FilteredCurrentProducts = currentProducts
    .map((item) => item)
    .filter((item) => (item.salePrice ? item : null));
  return FilteredCurrentProducts;
}
console.log(showSalePriceItems());
// 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuolada");

// class Product {
//   constructor(pName, price, salePrice, category) {
//     this.pName = pName;
//     this.price = price;
//     this.salePrice = salePrice;
//     this.category = category;
//     this.pNameNprice = function () {
//       console.log(`Product ${thispName}: regular price:${this.price}`);
//     };
//     this.isItemOnSale = function () {
//       if (this.salePrice) {
//         console.log(
//           `Pasrinktam produktui, ${this.item} nuolaida yra netaikoma`
//         );
//       } else {
//         console.log(
//           `Pasrinktam produktui, ${
//             this.item
//           } nuolaida yra taikoma. ir jo galutine kaina yra ${
//             this.salePrice
//           } ir nuolaida - ${
//             (this.salePrice / this.price).toFixed(2) * 100 - 100
//           }`
//         );
//       }
//     };
//   }
// }
console.log(
  kepure.isItemOnSale(),
  kedai.isItemOnSale(),
  kelnes.isItemOnSale(),
  treningasOne.isItemOnSale(),
  treningasTwo.isItemOnSale()
);
