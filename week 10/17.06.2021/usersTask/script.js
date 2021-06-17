// Variables
const endpoint = `https://api.github.com/users`;
const outputElement = document.querySelector(`#output`);
let output = ``;
// Functions
async function createUsers(endpoint) {
  await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      data.slice(0, 16).forEach((item) => {
        output += `
      <div class="item">
        <img src="${item.avatar_url}">
        <span>Tarybos narys</span>
        <p>Labas! As esu <span class="color">${item.login
          .charAt(0)
          .toUpperCase()}</span>!</p>
        <h6>Tėvynės sąjunga – Lietuvos krikščionys demokratai</h6>
      </div>
      `;
      });
      outputElement.innerHTML = output;
    });
  addFUN();
}

function addFUN() {
  const allItems = document.querySelectorAll(`.item`);
  console.log(allItems);
  allItems.forEach((item) => {
    item.addEventListener(`click`, (e) => {
      console.log(e.target.className);
      let was = e.target.className;
      e.target.className = `${e.target.className} fun`;
      setTimeout(() => {
        console.log(was);
        e.target.className = `${was.trim() == `fun` ? `` : was}`;
      }, 2000);
    });
  });
}

createUsers(endpoint);
