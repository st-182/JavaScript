// // Products data from API
// const PRODUCTS_ENDPOINT = `products.json`;
// // OOP
// // Var
// const filterElement = document.querySelector(`#filter`);
// const productsElement = document.querySelector(`#products`);
// // data
// let products = [];

// class Shop {
//   constructor(element, array) {
//     this.element = element;
//     this.array = array;
//   }
//   static createProduct(product) {
//     console.log(`Doing html`);
//     let shopItem = `
//     <div>
//     <img src="${product.image}">
//     <h3>${product.title}</h3>
//     <p>${product.category.join(`,`)}</p>
//     <p>${product.price}</p>
//     </div>
//     `;
//     return shopItem;
//   }
//   render() {
//     let output = ``;
//     for (let product of this.array) {
//       output += Shop.createProduct(product);
//     }
//     this.element.innerHTML = output;
//   }
// }
// //EVENTS
// document.addEventListener(`DOMContentLoaded`, () => {
//   fetch(PRODUCTS_ENDPOINT)
//     .then((responce) => responce.json())
//     .then((data) => products.push(...data));
//   console.log(`done`);

//   //   let shop = new Shop(productsElement, products);
//   //   shop.render();
// });
// window.addEventListener(`load`, () => {
//   let shop = new Shop(productsElement, products);
//   shop.render();
//   console.log(`done`);
// });

// Products data from API
const PRODUCTS_ENDPOINT = "products.json";

// ----- OOP -----
// ---------------

// PIRMAS BŪDAS
// Variables
// -- DOM elements
const productsElement = document.querySelector("#products");

// -- data (stores products from PRODUCTS_ENDPOINT)
let products = [];
fetch(PRODUCTS_ENDPOINT)
  .then((response) => response.json())
  .then((data) => products.push(...data));

class SHOP {
  constructor(element, array) {
    this.element = element;
    this.array = array;
  }

  static createProduct(product) {
    console.log("a");

    let shopItem = `
      <div>
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <p>${product.category.join(",")}</p>
        <p>${product.price}</p>
      </div>
      `;

    return shopItem;
  }

  render() {
    console.log("a");

    let output = "";
    console.log(this.array);

    for (let product of this.array) {
      console.log("athis");
      output += SHOP.createProduct(product);
    }

    this.element.innerHTML = output;
  }
}

// Events
window.addEventListener("load", () => {
  console.log("a");
  let shop = new SHOP(productsElement, products);
  shop.render();
});
