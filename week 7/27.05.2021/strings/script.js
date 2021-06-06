const userInfoOutput = document.querySelector(`.main`);

let user = {
  name: `myName`,
  surname: `mySurname`,
};
user.name = prompt(`Name:`);
user.surname = prompt(`Surname:`);
userInfoOutput.innerHTML = `
<h2>User Information</h2>
<p>Vartotojo vardas yra ${user.name}, o pavardė ${user.surname}.</p>
`;
