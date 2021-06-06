document.querySelector(`main`).appendChild(document.createElement(`table`));
let row = 10;
let column = 10;
let y = 0;
for (let i = 1; i < row + 1; i++) {
  document.querySelector(`table`).appendChild(document.createElement(`tr`));
  y += 1;
  for (let x = 1; x < column + 1; x++) {
    document
      .querySelector(`tr:nth-of-type(${y})`)
      .appendChild(document.createElement(`td`)).textContent = `${i} ${x}`;

    // if (x === 1) {
    //   document
    //     .querySelector(`tr:first-of-type`)
    //     .appendChild(document.createElement(`td`)).textContent = `${i} ${x}`;
    // } else {
    //   document
    //     .querySelector(`tr:nth-of-type(${x})`)
    //     .appendChild(document.createElement(`td`)).textContent = `${i} ${x}`;
    // }
  }
}
document.querySelector(`table`).style.border = `1px solid black`;
