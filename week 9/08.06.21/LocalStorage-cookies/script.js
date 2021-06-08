// Variables
const usersOutput = document.querySelector("#output");
// Promises (ES6)
// --** simple Promise example **--
// --** more complex Promise example **--
let simplePromice = new Promise((resolve, reject) => {
  const userName = `Peter`;
  if (userName === `Peter`) {
    resolve({ message: `Success`, name: userName });
  } else {
    reject(`Failed`);
  }
});
console.log(`simplePromice:`);
simplePromice
  .then((result) =>
    console.log(` Message: ${result.message}, name: ${result.name}`)
  )
  .catch((error) => console.log(error));
console.log(`simplePromice: 2222222`);
console.log(simplePromice);
// PROBLEM: need to update users lists asynchronously
const users = [
  { name: "Peter", surname: "Griffin" },
  { name: "Lois", surname: "Griffin" },
  { name: "Chris", surname: "Griffin" },
  { name: "Meg", surname: "Griffin" },
  { name: "Stewie", surname: "Griffin" },
];

// function getUsers() {
//   setTimeout(() => {
//     let output = ``;

//     users.forEach((user) => {
//       output += `
//             <ul>
//             <li>Name: ${user.name}</li>
//             <li>Name: ${user.surname}</li>
//             </ul>
//             `;
//     });
//     usersOutput.innerHTML = output;
//   }, 3000);
// }
// getUsers();

function getUsersWithPromice() {
  setTimeout(() => {
    let output = ``;

    users.forEach((user) => {
      output += `
            <ul>
            <li>Name: ${user.name}</li>
            <li>Name: ${user.surname}</li>
            </ul>
            `;
    });
    usersOutput.innerHTML = output;
  }, 3000);
}
getUsersWithPromice();

function crateUserWithPromices(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      let success = true;
      if (success) {
        resolve();
      } else {
        reject(`Error: Unable to add user`);
      }
    }, 3000);
  });
}
crateUserWithPromices({ name: `Olololo`, surname: `Sasauskas` })
  .then(getUsersWithPromice)
  .catch((error) => console.log(error));
// function crateUser(user, callback) {
//   setTimeout(() => {
//     users.push(user);
//     callback();
//   }, 3000);
// }
// crateUser({ name: `Olololo`, surname: `Sasauskas` }, getUsers);

// --- 1. problem solving using using callbacks (old way)
// --- 2. problem solving using using Promises (new way)
// Async / Await
// --- 2.1 problem solving using using Async/await (new way)
// ---- Async / Await / Fetch
