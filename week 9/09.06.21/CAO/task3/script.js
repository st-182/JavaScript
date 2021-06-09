//Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".
const jsonURI = "https://boiling-reaches-93648.herokuapp.com/week-3/wedding";

// const photo = document.querySelector("#photo");
// const name = document.querySelector("#name");
// const age = document.querySelector("#age");
// const email = document.querySelector("#email");
// console.log(photo);

async function tableFromJSON() {
  let response = await fetch(jsonURI);
  let people = await response.json();
  console.log(people);
  document.body.appendChild(document.createElement(`table`));
  document.querySelector(`table`).appendChild(document.createElement(`thead`));
  document
    .querySelector(`thead`)
    .appendChild(document.createElement(`td`)).textContent = `Name`;
  document
    .querySelector(`thead`)
    .appendChild(document.createElement(`td`)).textContent = `PlusOne`;
  document
    .querySelector(`thead`)
    .appendChild(document.createElement(`td`)).textContent = `Attending`;
  for (person of people) {
    document.querySelector(`table`).appendChild(document.createElement(`tr`));
    document
      .querySelector(`tr:last-of-type`)
      .appendChild(document.createElement(`td`)).textContent = person.name;
    document
      .querySelector(`tr:last-of-type`)
      .appendChild(document.createElement(`td`)).textContent = person.plusOne
      ? `+`
      : `-`;
    document
      .querySelector(`tr:last-of-type`)
      .appendChild(document.createElement(`td`)).textContent = person.attending
      ? `+`
      : `-`;
  }
}
tableFromJSON();
