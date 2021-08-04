console.log(`works`);
const createDB_Btn = document.querySelector(`#create-s`);
const createTable_Btn = document.querySelector(`#create-t`);
const executeCommand_Btn = document.querySelector(`#execute`);
const outputElement = document.querySelector(`#output`);
const output2Element = document.querySelector(`#output2`);
const mysqlInputElement = document.querySelector(`#mysql`);

const createDB = () => {
  console.log(`Works 1`);
  fetch(`http://localhost:5000/`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({
      do: `createDB`,
      data: mysqlInputElement.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      outputElement.innerHTML += `<p>${data}</p>`;
    });
};
// CREATE TABLE names (id int AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))

const getDataYES = () => {
  fetch(`http://localhost:5000/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let one;
      data.forEach((item) => {
        one += `<p>${item.name}</p>`;
      });
      output2Element.innerHTML += one;
    });
};

// const createTable = () => {
//   console.log(`Works 2`);
//   fetch(`http://localhost:5000/`, {
//     method: `POST`,
//     headers: {
//       "Content-Type": `application/json`,
//     },
//     body: JSON.stringify({
//       do: `createTable`,
//       data: ``,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       outputElement.innerHTML += `<p>${data}</p>`;
//     });
// };
// const executeCommand = () => {
//   console.log(`Works 3`);
//   fetch(`http://localhost:5000/`, {
//     method: `POST`,
//     headers: {
//       "Content-Type": `application/json`,
//     },
//     body: JSON.stringify({
//       do: `executeCommand`,
//       data: ``,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => (outputElement.innerHTML += `<p>${data.do}</p>`));
// };

createDB_Btn.addEventListener(`click`, createDB);
document.addEventListener(`DOMContentLoaded`, getDataYES);
// createTable_Btn.addEventListener(`click`, createTable);
// executeCommand_Btn.addEventListener(`click`, executeCommand);
