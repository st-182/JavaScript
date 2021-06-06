//* Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

let userNumber; // My future Object
const users = [];

document.querySelector(`input`).addEventListener(`blur`, (e) => {
  //Adding the event
  e.preventDefault();
  userNumber = new TableRowGenerator(); // creating the object
  userNumber.separateFullName(); // launching  Object's method
  users.push(userNumber);
  console.log(users);
});

class TableRowGenerator {
  // ES6 Object creation
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  separateFullName() {
    // Method
    const fullName = document.querySelector(`input`).value; // taking input
    let arr = fullName.trim().split(` `); // getting the array out of input
    this.name = arr[0].charAt(0).toUpperCase() + arr[0].slice(1).toLowerCase(); // attribution of first word (name)
    console.log(fullName);
    console.log(this.surname);
    arr[1] // if staitment, which checks whether we have a second word (surname)
      ? (this.surname =
          arr[1].charAt(0).toUpperCase() + arr[1].slice(1).toLowerCase())
      : null;
    console.log(userNumber);
    const createTR = document.createElement(`tr`); // IMPORTANT TO HAVE THOSE VALUES INSIDE THE METHOD IN ORDER TO CREATE NEW ELEMENTS
    const appendTR = document.querySelector(`tbody`);
    appendTR.appendChild(createTR); // creation of table row
    const createTD1 = document.createElement(`td`);
    const createTD2 = document.createElement(`td`);
    const appendTD = document.querySelector(`tbody > tr:last-of-type`);
    appendTD.appendChild(createTD1).textContent = this.name; // creation of table colum with name
    appendTD.appendChild(createTD2).textContent = this.surname; // creation of table column with surname
  }
}
