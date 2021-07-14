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
  currentCartItems.push({
    id: `${currentCartItems.length ? currentCartItems.length + 1 : 1}`,
    name: e.target.parentElement.children[1].textContent,
    price: e.target.parentElement.children[2].textContent,
  });

  localStorage.setItem("Cart", JSON.stringify(currentCartItems));
  //   console.log(localStorage.getItem("Cart"));
  showCart();
};

const showCart = () => {
  cartItemsOutputElement.innerHTML = ``;
  currentCartItems = JSON.parse(localStorage.getItem("Cart"));
  if (currentCartItems) {
    currentCartItems.forEach((item) => {
      cartItemsOutputElement.innerHTML += `
            <div class="line">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button class="delete" id="${item.id}">Delete</button>
            </div>
        `;
    });
    // cartItemsOutputElement.innerHTML += `
    //         <div class="line">
    //         <p>Total:</p>
    //         <p>${cartItemsOutputElement.reduce((acc, cur) => {
    //           acc += cur;
    //           return acc;
    //         }, 0)}</p>
    //         <button class="delete" id="${item.id}">Delete</button>
    //         </div>
    //     `;
    howManyItemsElement.textContent = currentCartItems.length;
    document.querySelectorAll(`.delete`).forEach((item) => {
      item.addEventListener(`click`, deleteCartItem);
    });
  }
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

//events
document.addEventListener(`DOMContentLoaded`, showFoodItems);
