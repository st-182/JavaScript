// var
const myAPI = `http://localhost:5000/`;
const form = document.querySelector(`form`);
// func
function go() {
  fetch(myAPI)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(`#output`).innerHTML = data.reduce((acc, user) => {
        code = `
        <div style="background-color:rgba(0,0,0,0.2);width:25%; display:inline-block">
          <h3>${user.name}</h3>
          <h3>${user.surname}</h3>
        </div>
        `;
        return acc + code;
      }, ``);
    })
    .catch((error) => console.log(error));
}
function goPOST(e) {
  e.preventDefault();
  name = e.target[0].value;
  surname = e.target[1].value;
  fetch(myAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      surname,
    }),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => alert(data))

    .catch((error) => console.log(error));
}
// events
document.addEventListener(`DOMContentLoaded`, go);
form.addEventListener(`submit`, goPOST);
