// Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS):
const jsonURI = "https://randomuser.me/api/";

const photo = document.querySelector("#photo");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
console.log(photo);

async function loadRandomUser() {
  let response = await fetch(jsonURI);
  let user = await response.json();
  console.log(user.results[0].picture.large);
  photo.setAttribute(`src`, user.results[0].picture.large);
  name.textContent = `I am ${user.results[0].name.first} ${user.results[0].name.last}`;
  age.textContent = `My age is ${user.results[0].dob.age} One two three`;
  email.textContent = user.results[0].email;
  console.log(`done`);
}
loadRandomUser();
