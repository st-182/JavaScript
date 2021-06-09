// Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

const jsonURI = "https://boiling-reaches-93648.herokuapp.com/week-3/party";

// const photo = document.querySelector("#photo");
// const name = document.querySelector("#name");
// const age = document.querySelector("#age");
// const email = document.querySelector("#email");
// console.log(photo);

async function isVIP() {
  let response = await fetch(jsonURI);
  let users = await response.json();
  console.log(users);
  if (users.filter((item) => item.name === `Kristupas Lapeika`)) {
    console.log(`EXISTS`);

    document.body.innerHTML =
      `Kristupas Lapeika's VIP status is ` +
      users.filter((item) => item.name === `Kristupas Lapeika`)[0].vip;
    document.body.style.fontFamily = `Roboto`;
    document.body.style.fontSize = `50px`;
    document.body.style.textAlign = `center`;
  }
  // for (user of users) {
  //   console.log(user.name);
  // }
  // document.body.innerHTML = users.slice(0, 10).reduce((output, posts) => {
  //   output += `
  //     <div>
  //       <h3>${posts.title}</h3>
  //       <p>${posts.body}</p>
  //     </div>
  //     `;
  //   return output;
  // });
}
isVIP();
