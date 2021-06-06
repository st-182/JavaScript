// Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą.
let car; 
const allCars = [];
const createDiv = document.createElement(`div`);
const appendDiv = document.querySelector(`body`);

document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  car = new CarGen(); 
  car.create(); 
  allCars.push(car); 
  console.log(allCars);
});

class CarGen {
  constructor(carBrand, model, mileage, price, image) {
    this.carBrand = carBrand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  create() {
    this.carBrand = document.querySelector(`input:nth-of-type(1)`).value;
    this.model = document.querySelector(`input:nth-of-type(2)`).value;
    this.mileage = document.querySelector(`input:nth-of-type(3)`).value;
    this.price = document.querySelector(`input:nth-of-type(4)`).value;
    this.image = document.querySelector(`input:nth-of-type(5)`).value;
    console.log(
      this.carBrand,
      this.model,
      this.mileage,
      this.price,
      this.image
    );
    appendDiv.appendChild(createDiv).classList.add(`cars`);
    const createDiv1 = document.createElement(`div`);
    const appendDiv1 = document.querySelector(`.cars`);
    const newDivItem = appendDiv1.appendChild(createDiv1);
    newDivItem.classList.add(`item`);
    newDivItem.addEventListener(`click`, () => alert(`price is ${this.price}`));
    const createP = document.createElement(`p`);
    const appendP = document.querySelector(`.item:last-of-type`);
    const newP = appendP.appendChild(createP);
    newP.textContent = this.carBrand;
    const createImg = document.createElement(`img`);
    const appendImg = document.querySelector(`.item:last-of-type`);
    const newImgPhoto = appendImg.appendChild(createImg);
    newImgPhoto.classList.add(`photo`);
    console.log();
    newImgPhoto.setAttribute(`src`, `${this.image}`);
  }
}
