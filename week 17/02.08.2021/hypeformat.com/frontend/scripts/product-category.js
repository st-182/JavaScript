//Imports
import endpoints from "./modules/endpoints.js";
import nav from "./components/nav.js";
console.log(nav(), endpoints());

const consumer_key = `ck_b1787d23e087fc4487013614991d3f989cfbcea0`;
const consumer_secret = `cs_7b76f2ecc8e2c66bcf53bc697f44062bd7d9cea6`;

const start = () => {
  fetch(
    `https://hypeformat.com/wp-json/wc/v3/products?category=29&per_page=20`,
    {
      method: `GET`,
      headers: {
        Authorization: "Basic " + btoa(`${consumer_key}:${consumer_secret}`),
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(`#output`).innerHTML = data.reduce((acc, cur) => {
        acc += `
        <div class="item">
          <div class="img-div">
            <img src="${cur.images[0].src}" alt="">
          </div>
          <p>${cur.categories[0].name}</p>
          <p>${cur.yoast_head_json.title}</p>
          <p></p>
          <p>${cur.price_html}</p>
        </div>
        `;
        return acc;
      }, ``);
    });
  // ?per_page=100
  // ?category=30
};

document.addEventListener(`DOMContentLoaded`, start);
