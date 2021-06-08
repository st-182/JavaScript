// 3. Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma, tegul būna lentelė, būtent joje atsivaizduoja informacija iš localStorage array.
const form = document.querySelector(`form`);
const fullname = document.querySelector(`input`);
const btn = document.querySelector(`#btn`);
let users = [];
btn.addEventListener(`click`, () => {
  localStorage.removeItem(`userDatabase`);
  document.querySelector(`table`).innerHTML = ``;
  users = [];

  console.log(`DONE DELETE`);
});
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const clearFullname = fullname.value
    .trim()
    .split(` `)
    .filter((item) => item != ` ` && item != ``);
  for (item in clearFullname) {
    clearFullname[item] =
      clearFullname[item].charAt(0).toUpperCase() +
      clearFullname[item].slice(1).toLowerCase();
  }
  console.log(clearFullname);
  let user = {};
  if (clearFullname.length === 2 || clearFullname.length === 3) {
    user = {
      name: clearFullname[0],
      middleName: clearFullname[2] ? clearFullname[1] : null,
      surname: clearFullname[2] ? clearFullname[2] : clearFullname[1],
    };
  } else {
    return console.log(
      `Error, name is not following standards (Name, MiddleName, Surname)`
    );
  }
  console.log(user);

  users.push(user);
  console.log(users);

  localStorage.setItem(`userDatabase`, JSON.stringify(users));
  // JSON.stringify(users);
  // setTimeout(() => console.clear(), 2000);
  setTimeout(
    () => console.log(/*user, users*/ localStorage.getItem(`userDatabase`)),
    2100
  );
  createTable(localStorage.getItem(`userDatabase`));
});
document.body.appendChild(document.createElement(`table`));
function createTable(lsdb) {
  document.querySelector(`table`).innerHTML = ``;
  const arrWithObjects = JSON.parse(lsdb);
  for (item in arrWithObjects) {
    let name = arrWithObjects[item].name;
    let middleName = arrWithObjects[item].middleName;
    let surname = arrWithObjects[item].surname;
    console.log(name);
    // document.createElement(`table`)
    document.querySelector(`table`).appendChild(document.createElement(`tr`));
    document
      .querySelector(`tr:last-of-type`)
      .appendChild(document.createElement(`td`)).textContent = name;
    document
      .querySelector(`tr:last-of-type`)
      .appendChild(document.createElement(`td`)).textContent = middleName;
    document
      .querySelector(`tr:last-of-type`)
      .appendChild(document.createElement(`td`)).textContent = surname;
  }
}
