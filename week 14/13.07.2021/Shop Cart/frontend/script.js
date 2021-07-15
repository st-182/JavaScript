//variables

// import { json } from "body-parser";

// import products from "../backend/db/products";

//-- api
const PRODUCTS_URI = `http://localhost:5000/api/products`;
//-- DOM elements
const productsOutputElement = document.querySelector(`#products`);

//-- logic
let products = [];
let cart = JSON.parse(localStorage.getItem("cartItems"));

//functions

//-- showing products from API
const showProducts = (endpoint) => {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      productsOutputElement.innerHTML = data.reduce((acc, item) => {
        acc += `
        <div class="product">
        <img src="${item.image}" />
        <h5> ${item.name} </h5>
        <p>$${item.category.join(`,`)} </p>
        <p>$${item.price.toFixed(2)} </p>
        <button class="product__add-to-cart-btn" id="${
          item.id
        }"> Add to cart</button>
        </div>
        `;
        return acc;
      }, ``);
      const addToCartBtns = document.querySelectorAll(
        `.product__add-to-cart-btn`
      );
      addToCartBtns.forEach((btn) => {
        btn.addEventListener(`click`, (e) => addProductToCart(e));
      });
      //saving products to global products array
      products.push(...data);
    })
    .catch((err) => console.log(err));
};

//--  showing chart items from localstorage
const showCartItems = () => {};

//--  adding products to cart
const addProductToCart = (e) => {
  const productID = +e.target.id;

  //-- if it is first item, then added
  if (!localStorage.getItem("cartItem")) {
    const product = products.find((product) => product.id === productID);
    product.qti = 1;

    localStorage.setItem("cartItems", JSON.stringify([product]));
  } else {
    // if not first item
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("cartItems")
    );

    if (
      productsFromLocalStorage.findIndex((item) => item.id === productID) >= 0
    ) {
      productsFromLocalStorage.forEach((product) => {
        if (item.id === productID) product.qti += 1;
      });
    } else {
      product.qti = 1;
      productsFromLocalStorage.push(product);
    }
    //-- sending to localStorage
    localStorage.setItem("cartItems", JSON.stringify(productsFromLocalStorage));
  }
};

//--  removing products from cart

//events
document.addEventListener(`DOMContentLoaded`, () => {
  showProducts(PRODUCTS_URI);
  showCartItems();
});
