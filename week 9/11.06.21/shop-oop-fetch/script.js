// // Products data from API
// const PRODUCTS_ENDPOINT = "products.json";

// // ----- OOP + Funkcinis -----
// // ---------------

// // PIRMAS BŪDAS
// // Variables
// // -- DOM elements
// const productsElement = document.querySelector("#products");

// // -- data (stores products from PRODUCTS_ENDPOINT)
// let products = [];
// // fetch(PRODUCTS_ENDPOINT)
// //   .then((response) => response.json())
// //   .then((data) => products.push(...data));

// class SHOP {
//   constructor(element, array) {
//     this.element = element;
//     this.array = array;
//   }

//   static createProduct(product) {
//     console.log(product);
//     let shopItem = `
//       <div>
//         <img src="${product.image}">
//         <h3>${product.title}</h3>
//         <p>${product.category.join(",")}</p>
//         <p>${product.price}</p>
//       </div>
//       `;

//     return shopItem;
//   }

//   render() {
//     let output = "";
//     console.log(this.array);
//     for (let product of this.array) {
//       console.log(product);
//       output += SHOP.createProduct(product);
//     }

//     this.element.innerHTML = output;
//   }
// }

// // Events
// // window.addEventListener("load", () => {
// //   console.log("a");
// //   let shop = new SHOP(productsElement, products);
// //   shop.render();
// // });

// window.addEventListener("DOMContentLoaded", () => {
//   fetch(PRODUCTS_ENDPOINT)
//     .then((response) => response.json())
//     .then((data) => {
//       let shop = new SHOP(productsElement, data);
//       shop.render();
//     });
// });

//! Version 2

// // Products data from API
// const PRODUCTS_ENDPOINT = "products.json";
// const filters = document.querySelectorAll(`input[type="radio"]`);
// console.log(filters);
// // ----- OOP -----
// // ---------------

// // PIRMAS BŪDAS
// // Variables
// // -- DOM elements
// const productsElement = document.querySelector("#products");

// // -- data (stores products from PRODUCTS_ENDPOINT)
// let products = [];
// // fetch(PRODUCTS_ENDPOINT)
// //   .then((response) => response.json())
// //   .then((data) => products.push(...data));

// class SHOP {
//   constructor(element, endpoint) {
//     this.element = element;
//     this.endpoint = endpoint;
//   }

//   static createProduct(product) {
//     // console.log(product);
//     let shopItem = `
//       <div style="border: 1px solid black; width:48%; display:inline-block; margin: 0 auto;">
//         <img src="${product.image}">
//         <h3>${product.title}</h3>
//         <p>${product.category.join(",")}</p>
//         <p>${product.price}</p>
//       </div>
//       `;

//     return shopItem;
//   }

//   filter(category) {
//     let products = cashedProducts.filter((products))
//   }

//   render() {
//     fetch(this.endpoint)
//       .then((response) => response.json())
//       .then((data) => {
//         let products = data;
//         let output = "";
//         // console.log(this.array);
//         for (let product of products) {
//           // console.log(product);
//           output += SHOP.createProduct(product);
//         }

//         this.element.innerHTML = output;
//       });
//   }
// }

// class App {
//   static init() {
//     const shop = new SHOP(productsElement, PRODUCTS_ENDPOINT);
//     shop.render();

//     filters.forEach((filter) => {
//       filter.addEventListener(`change`, (e) => {
//         shop.filter
//       });
//     });
//   }
// }
// App.init();

// ANTRAS BŪDAS
const PRODUCTS_ENDPOINT = "products.json";
// VARIABLES --------------------------------------
// DOM elements
const productsElement = document.querySelector("#products");
const filters = document.querySelectorAll("input[type=radio]");
// // data (stores products from PRODUCTS_ENDPOINT)
let cachedProducts = [];
// CLASSES
// -----------
class SHOP {
  constructor(element, endpoint) {
    this.element = element;
    this.endpoint = endpoint;
  }
  static createProductItem(product) {
    let shopItem = `
      <div class="item">
      <img src="${product.image}">
      <h3>${product.title}</h3>
      <p>${product.category.join(",")}</p>
      <p>☆☆☆☆☆</p>
      <p>16.00€-${Number(product.price).toFixed(2)}€</p>
      </div>
      `;
    return shopItem;
  }
  filter(filterCategory) {
    let products =
      filterCategory !== "all-products"
        ? cachedProducts.filter((product) =>
            product.category.includes(filterCategory)
          )
        : cachedProducts.map((product) => product);
    let output = "";
    for (let product of products) {
      output += SHOP.createProductItem(product);
    }
    this.element.innerHTML = output;
  }
  render() {
    return fetch(this.endpoint)
      .then((response) => response.json())
      .then((data) => {
        let products = data;
        cachedProducts.push(...data);
        let output = "";
        for (let product of products) {
          output += SHOP.createProductItem(product);
        }
        this.element.innerHTML = output;
      });
  }
}
class App {
  static init() {
    const shop = new SHOP(productsElement, PRODUCTS_ENDPOINT);
    shop.render();
    filters.forEach((filter) => {
      filter.addEventListener("change", (e) => shop.filter(e.target.value));
    });
  }
}
// starting APP
App.init();
