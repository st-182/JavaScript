// Variables
// DOM elements

const nav = document.querySelector(`nav`);

// Functions
const showNav = () => {
    // -- creating HTML elements

    const ul = document.createElement(`ul`);
    const liOne = document.createElement(`li`);
    const liTwo = document.createElement(`li`);
    const aOne = document.createElement(`a`);
    const aTwo = document.createElement(`a`);

    // -- adding content and attributes to created HTML elements
    aOne.href = location.href.includes(`pages`) ? `../index.html` : `index.html`;
    aOne.innerText = `Home`;

    let user = JSON.parse(localStorage.getItem(`user`));

    if (user) {
        aTwo.href = location.href.includes(`pages`) ? `my-account.html` : `./pages/my-account.html`;
        aTwo.innerText = `My account`;
    } else {
        aTwo.href = location.href.includes(`pages`) ? `login.html` : `./pages/login.html`;
        aTwo.innerText = `Login / Register`;
    }
    

    // append elements
    liOne.appendChild(aOne);
    liTwo.appendChild(aTwo);
    
    ul.appendChild(liOne);
    ul.appendChild(liTwo);

    nav.appendChild(ul);
}

// Events
document.addEventListener(`DOMContentLoaded`, showNav);
