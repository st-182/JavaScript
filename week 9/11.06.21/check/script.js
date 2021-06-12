// Products data from API
const PRODUCTS_ENDPOINT = 'products.json';

// ----- OOP -----
// ---------------

// PIRMAS BŪDAS
// Variables
// -- DOM elements
const productsElement = document.querySelector('#products');

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
    let shopItem = `
      <div>
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <p>${product.category.join(',')}</p>
        <p>${product.price}</p>
      </div>
      `;

    return shopItem;
  }

  render() {
    let output = '';

    for (let product of this.array) {
      output += SHOP.createProduct(product);
    }

    this.element.innerHTML = output;
  }
}

// Events
window.addEventListener('load', () => {
  console.log('a');
  let shop = new SHOP(productsElement, products);
  shop.render();
});
