//API ENDPOINT
const BASE_URL = `https://melon-potent-period.glitch.me`;

// Variables
// - DOM
const outputElement = document.querySelector(`#output`);
const formElement = document.querySelector(`form`);

// Functions
const getFunc = async () => {
  await fetch(BASE_URL + "/skills")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        // Creation of skills list
        outputElement.innerHTML += `
        <tr class="item">
            <td>${item.id}</td>
            <td>${item.skill}</td>
            <td><button class="delete btn btn-secondary" id="${item.id}">Delete</button></td>
        </tr>
        `;
      });
    });
  addListnerFuncToBtn();
};

const addListnerFuncToBtn = () => {
  const btnElements = document.querySelectorAll(`button`);
  btnElements.forEach((item) => item.addEventListener(`click`, deleteFunc));
};

const postFunc = (e) => {
  e.preventDefault();
  fetch(BASE_URL + "/skills", {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ skill: e.target[0].value }),
  }).then((response) => {
    alert(response.status === 200 ? `Success` : `Error ${response.status}`);
    if (response.status === 200) {
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 1000);
    }
  });
};

const deleteFunc = (e) => {
  fetch(BASE_URL + `/skill/${e.target.id}`, {
    method: `DELETE`,
  }).then((response) => {
    alert(response.status === 200 ? `Success` : `Error ${response.status}`);
    if (response.status === 200) {
      animateIt(e);
      setTimeout(() => location.reload(), 2000);
    }
  });
};
// - additional animation
const animateIt = (e) => {
  document.querySelectorAll(`tr`).forEach((item) => {
    item.animate(
      [
        // keyframes
        { transform: "translateY(0px)" },
        { transform: "translateY(-500px)", opacity: "0" },
      ],
      {
        // timing options
        duration: 2500,
      }
    );
  });
  document.querySelector(`table`).animate(
    [
      // keyframes
      { opacity: "1" },
      { opacity: "0" },
    ],
    {
      // timing options
      duration: 2100,
    }
  );
};

// Events
// --- 'if' decides what code should run on which page
if (outputElement) {
  document.addEventListener(`DOMContentLoaded`, getFunc);
}
if (formElement) {
  formElement.addEventListener(`submit`, postFunc);
}
