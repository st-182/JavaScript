const END_POINT = `http://localhost:5000/`;
//var
const foodItemsOutputElement = document.querySelector(`#output`);
const cartItemsOutputElement = document.querySelector(`#cart-output`);
const howManyItemsElement = document.querySelector(`#how-many-items`);

let currentCartItems = JSON.parse(localStorage.getItem("Cart"));

//functions
const showFoodItems = () => {
  fetch(END_POINT)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      data.slice(0, 5).forEach((item) => {
        foodItemsOutputElement.innerHTML += `
          <div class="output-item">
          <img src="${item.img}" >
          <p>${item.name}</p>
          <p>${item.price}€</p>
          <button class="item-btn">Add to Cart!</button>
          </div>
          `;
      });
      document.querySelectorAll(`.item-btn`).forEach((item) => {
        item.addEventListener(`click`, addToCart);
      });
      showCart();
    });
};

const addToCart = (e) => {
  //   console.log(e.target.parentElement.children[1].textContent);
  //   console.log(e.target.parentElement.children[2].textContent);
  if (currentCartItems) {
    currentCartItems = JSON.parse(localStorage.getItem("Cart"));
  } else {
    currentCartItems = [];
  }
  let newItem = {
    id: `${currentCartItems.length ? currentCartItems.length + 1 : 1}`,
    name: e.target.parentElement.children[1].textContent,
    price: e.target.parentElement.children[2].textContent,
    quantity: 1,
  };
  let quantityOfItems = currentCartItems.filter((item) => {
    if (item.name === newItem.name && item.price === newItem.price) {
      return item;
    }
  });
  // console.log(quantityOfItems);
  if (quantityOfItems.length >= 1) {
    quantityOfItems[0].quantity += 1;
  }
  console.log(quantityOfItems[0]);
  if (quantityOfItems[0] === undefined) {
    currentCartItems.push(newItem);
  }

  localStorage.setItem("Cart", JSON.stringify(currentCartItems));
  //   console.log(localStorage.getItem("Cart"));
  showCart();
};

const showCart = () => {
  cartItemsOutputElement.innerHTML = ``;
  currentCartItems = JSON.parse(localStorage.getItem("Cart"));
  if (currentCartItems) {
    let totalQty = 0;
    let totalPrc = [];
    currentCartItems.forEach((item) => {
      cartItemsOutputElement.innerHTML += `
            <div class="line">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <p> <span id="remove${item.id}" class="remove-item-btns">-</span> ${
        item.quantity
      } <span id="add---${item.id}" class="add-item-btns">+</span></p>
            <p>Subtotal: ${(+item.price.slice(0, -1) * item.quantity).toFixed(
              2
            )}€</p>
            <button class="delete" id="${item.id}">Delete</button>
            </div>
        `;
      totalQty += item.quantity;
      totalPrc.push((+item.price.slice(0, -1) * item.quantity).toFixed(2));
    });
    if (currentCartItems.length >= 1) {
      cartItemsOutputElement.innerHTML += `
            <div class="line">
            <p>All items in cart.</p>
            <p>Total:</p>
            <p>${totalQty}</p>
            <p>${totalPrc.reduce((acc, item) => acc + +item, 0).toFixed(2)}€</p>
            <button class="purchase" id="purchase-all">Buy All</button>
            </div>
        `;
    }

    howManyItemsElement.textContent = currentCartItems.length;
    document.querySelectorAll(`.delete`).forEach((item) => {
      item.addEventListener(`click`, deleteCartItem);
    });
  }
  addEventsToBtn();
};

const deleteCartItem = (e) => {
  let afterDelete = currentCartItems.filter((item) => {
    if (item.id !== e.target.id) {
      return item;
    }
  });
  localStorage.setItem("Cart", JSON.stringify(afterDelete));

  showCart();
};

const changeCartItemQty = (e) => {
  const productID = e.target.id.slice(6, 7);
  console.log(e.target.textContent);
  let cartItems = JSON.parse(localStorage.getItem("Cart"));
  console.log(cartItems);
  let updatedCartItems = cartItems.filter((item) => item.id === productID);
  console.log(updatedCartItems);
  switch (e.target.textContent) {
    case `+`:
      if (updatedCartItems[0].quantity < 20) {
        updatedCartItems[0].quantity++;
        localStorage.setItem("Cart", JSON.stringify(cartItems));
        showCart();
      }
      break;
    case `-`:
      if (updatedCartItems[0].quantity > 1) {
        updatedCartItems[0].quantity--;
        localStorage.setItem("Cart", JSON.stringify(cartItems));
        showCart();
      }
      break;
  }
};

const addEventsToBtn = () => {
  let allRemoveBtn = document.querySelectorAll(`.remove-item-btns`);
  let allAddBtn = document.querySelectorAll(`.add-item-btns`);
  allRemoveBtn.forEach((btn) =>
    btn.addEventListener(`click`, changeCartItemQty)
  );
  allAddBtn.forEach((btn) => btn.addEventListener(`click`, changeCartItemQty));
};

//events
document.addEventListener(`DOMContentLoaded`, showFoodItems);
