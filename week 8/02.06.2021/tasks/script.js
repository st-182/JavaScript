//Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype), kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).
function createNewBook(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}
createNewBook.prototype.whatWho = function () {
  return `Author is ${this.author} and book's name is "${this.name}"!`;
};
createNewBook.prototype.old = function () {
  return `Book's age is is ${new Date().getFullYear() - this.year} years old!`;
};
createNewBook.prototype.info = function () {
  return `${this.author} ${this.name}`;
};
const myBook = new createNewBook(`How to code?`, `Aristidas`, 2020);
console.log(myBook);
console.log(myBook.old());
console.log(myBook.whatWho());
console.log(myBook.info());
