// EXTERNAL API
const JSONPLACEHOLDER_URI = "https://jsonplaceholder.typicode.com/posts";

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById("btn1");
const btnGetUser = document.getElementById("btn2");
const btnGetUsers = document.getElementById("btn3");
const btnGetPosts = document.getElementById("btn4");
const btnSendPost = document.getElementById("btn5");
//-- output
const textOutput = document.querySelector("#text");
const userOutput = document.querySelector("#user");
const usersOutput = document.querySelector("#users");
const postsOutput = document.querySelector("#posts");

// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information
function loadTextFileXHR() {
  //creating XHL object
  let xhr = new XMLHttpRequest();
  // console.log(xhr);
  // Using XHR object .open() method
  // GET, POST, PUT, DELETE - crud operator
  xhr.open(`GET`, `sample.txt`, true); //true - async
  // handling request
  xhr.onload = function () {
    // console.log(this.status);
    console.log(this.response);
    if (this.status === 200) {
      textOutput.innerText = this.responseText;
    } else {
      console.log(`not found`);
    }
  };
  xhr.send();
}

//-- Load User Information
function loadUserXHR() {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, `user.json`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let user = JSON.parse(this.responseText);
      userOutput.innerHTML = `
      <ul>
        <li> ID: ${user.id}</li>
        <li> Name: ${user.name}</li>
        <li> Email: ${user.email}</li>
      </ul>
      `;
    } else {
      console.log(`error`);
    }
  };
  xhr.send();
}

//-- Load Users information
function loadUsersXHR() {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, `users.json`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      let users = JSON.parse(this.responseText);
      // let output = ``;
      // for (let user of users) {
      //   // console.log(user);
      //   output += `
      // <ul>
      //   <li> ID: ${user.id}</li>
      //   <li> Name: ${user.name}</li>
      //   <li> Email: ${user.email}</li>
      // </ul>
      // `;
      // }
      // usersOutput.innerHTML = output;
      userOutput.innerHTML = users.reduce((output, user) => {
        output += `
          <ul>
            <li>ID: ${user.id}</li>
            <li>NAME: ${user.name}</li>
            <li>EMAIL: ${user.email}</li>
          </ul>
          `;
        return output;
      }, "");
    } else {
      console.log(`error`);
    }
  };
  xhr.send();
}

//-- Load Users information
function loadPostsXHR() {
  console.log(`one`);
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, JSONPLACEHOLDER_URI, true);
  xhr.onload = function () {
    // console.log(this.status);
    let posts = JSON.parse(this.responseText).slice(0, 10);
    console.log(posts);
    postsOutput.innerHTML = posts.reduce((output, posts) => {
      output += `
      <div>
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
      </div>
      `;
      return output;
    }, ``);
  };
  xhr.send();
}

//NEW VERSION AJAX (fetch())
// -- Getting data
//using fetch API

// function loadPostsFETCH() {
//   console.log(fetch(JSONPLACEHOLDER_URI));
//   return fetch(JSONPLACEHOLDER_URI)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((result) => {
//       let posts = result.slice(0, 10);
//       postsOutput.innerHTML = posts.reduce((output, posts) => {
//         output += `
//       <div>
//         <h3>${posts.title}</h3>
//         <p>${posts.body}</p>
//       </div>
//       `;
//         return output;
//       }, ``);
//       // console.log(result);
//     })
//     .catch((error) => console.log(error));
// }

async function loadPostsFETCH() {
  let response = await fetch(JSONPLACEHOLDER_URI);
  let posts = await response.json();

  postsOutput.innerHTML = posts.slice(0, 10).reduce((output, posts) => {
    output += `
      <div>
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
      </div>
      `;
    return output;
  }, ``);
}

// -- Sending data
function sendPostFETCH() {
  return fetch(JSONPLACEHOLDER_URI, {
    method: `Post`,
    headers: {
      "Content-Type": `aplication/json; charset=UTF-8`,
    },
    body: {
      userId: 1,
      title: `My first title`,
      body: `My first body`,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// *** Events ***
btnGetTextFile.addEventListener("click", loadTextFileXHR);
btnGetUser.addEventListener("click", loadUserXHR);
btnGetUsers.addEventListener("click", loadUsersXHR);
// btnGetPosts.addEventListener("click", loadPostsXHR);
btnGetPosts.addEventListener("click", loadPostsFETCH);
btnSendPost.addEventListener("click", sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
