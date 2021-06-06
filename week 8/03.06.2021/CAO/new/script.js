class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getIntroduction() {
    return `name:${this.name}  surname: ${this.surname}`;
  }
  printInTable() {
    const table = document.querySelector("table");
    const tableRow = document.createElement("tr");
    const newTdName = document.createElement("td");
    const newContentName = this.name;
    newTdName.append(newContentName);
    tableRow.append(newTdName);
    const newTdSurname = document.createElement("td");
    const newContentSurname = this.surname;
    newTdSurname.append(newContentSurname);
    tableRow.append(newTdSurname);
    table.append(tableRow);
  }
}
const input = document.querySelector("input");
input.addEventListener("blur", () => {
  let nameSurname = input.value.split(" ").filter((element) => element != "");
  console.log(nameSurname);
  if (nameSurname.length !== 2) {
    alert("wrong input");
  } else {
    let firstname =
      nameSurname[0].charAt(0).toUpperCase() +
      nameSurname[0].slice(1).toLowerCase();
    let surname =
      nameSurname[1].charAt(0).toUpperCase() +
      nameSurname[1].slice(1).toLowerCase();
    const newUser = new User(firstname, surname);
    console.log(newUser);
    newUser.printInTable();
    console.log(newUser.getIntroduction());
  }
});
