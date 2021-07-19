//variables

// import { json } from "body-parser";

// import products from "../backend/db/products";

//-- api
const PRODUCTS_URI = `http://localhost:5000/api/products`;
//-- DOM elements
const productsOutputElement = document.querySelector(`#products`);
const cartOutputElement = document.querySelector(`#tbody`);

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
        <button class="product__add-to-cart-btn" data-id="${
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
const showCartItems = () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (cartItems) {
    cartOutputElement.innerHTML = cartItems.reduce((acc, item) => {
      acc += `
    
      <tr>
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td><button data-id="${
          item.id
        }" class="cart-item-qty-action">-</button> ${
        item.qty
      } <button data-id="${
        item.id
      }" class="cart-item-qty-action">+</button></td>
        <td>$${(item.qty * item.price).toFixed(2)}</td>
        <td><button class="remove-cart-item-btn" data-id="${
          item.id
        }">Remove</button></td>
      </tr>
    
    `;
      return acc;
    }, ``);

    cartOutputElement.innerHTML += `
    
      <tr>
        <td>***</td>
        <td>Totals:</td>
        <td>Quantity: ${cartItems.reduce((acc, item) => {
          acc += item.qty;
          return acc;
        }, 0)}</td>
        <td>Price: $${cartItems.reduce((acc, item) => {
          acc += item.price * item.qty;
          return acc;
        }, 0)}</td>
        <td>***</td>
      </tr>

    `;
  }

  const removeCartItemBtns = document.querySelectorAll(`.remove-cart-item-btn`);
  removeCartItemBtns.forEach((btn) =>
    btn.addEventListener(`click`, removeProductFromCart)
  );
  // Show table when it has items in it (Cart)
  if (cartOutputElement.children.length > 0) {
    document.querySelector(`table`).classList.remove(`table-none`);
  } else {
    document.querySelector(`table`).classList.add(`table-none`);
  }

  // Change cart item quantity
  const cartItemQtyActions = document.querySelectorAll(`.cart-item-qty-action`);
  cartItemQtyActions.forEach((action) =>
    action.addEventListener(`click`, changeCartItemQty)
  );
};

const changeCartItemQty = (e) => {
  const productID = +e.target.dataset.id;
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let updatedCartItems = cartItems.filter((item) => item.id === productID);
  switch (e.target.textContent) {
    case `+`:
      if (updatedCartItems[0].qty < updatedCartItems[0].inStock) {
        updatedCartItems[0].qty++;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        showCartItems();
      }
      break;
    case `-`:
      if (updatedCartItems[0].qty > 1) {
        updatedCartItems[0].qty--;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        showCartItems();
      }
      break;
  }
};

const removeProductFromCart = (e) => {
  const productID = +e.target.dataset.id;
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let updatedCartItems = cartItems.filter((item) => item.id !== productID);
  console.log(updatedCartItems);
  localStorage.setItem(`cartItems`, JSON.stringify(updatedCartItems));
  showCartItems();
};

//--  adding products to cart
// -- adding product to cart
const addProductToCart = (e) => {
  const productId = +e.target.dataset.id;
  const product = products.find((item) => item.id === productId);
  // ---- if it's first item, thats been added
  if (!localStorage.getItem("cartItems")) {
    product.qty = 1;
    localStorage.setItem("cartItems", JSON.stringify([product]));
  } else {
    // ---- if its, not first item, thats been added
    let productsFromLocalStorage = JSON.parse(
      localStorage.getItem("cartItems")
    );
    // ------ if item already exists
    if (
      productsFromLocalStorage.findIndex((item) => item.id === productId) >= 0
    ) {
      productsFromLocalStorage.forEach((product) => {
        if (product.id === productId) product.qty += 1;
      });
    } else {
      // ------ if item is not existing
      product.qty = 1;
      productsFromLocalStorage.push(product);
    }
    //  ----- sending to localstorage updated productsFromLocalStorage
    localStorage.setItem("cartItems", JSON.stringify(productsFromLocalStorage));
  }
  // ---- updating Cart UI
  showCartItems();
};

//--  removing products from cart

//events
document.addEventListener(`DOMContentLoaded`, () => {
  showProducts(PRODUCTS_URI);
  showCartItems();
});
