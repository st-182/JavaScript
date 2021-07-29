//Imports
import {
  REGISTER_USER_URI,
  LOGIN_USER_URI,
} from '../modules/endpoints/endpoints.js';

// --- LOGIN ---
//------------

//variables
// -- DOM elements
const loginFormElement = document.querySelector('#loginForm');
const loginMessageElement = document.querySelector('#loginMessage');
//Functions
const loginUser = (e) => {
  e.preventDefault();

  const user = {
    email: e.target.loginEmail.value,
    password: e.target.loginPassword.value,
  };

  return fetch(LOGIN_USER_URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.loginStatus === 'failed') {
        e.target.loginEmail.value = '';
        e.target.loginPassword.value = '';

        e.target.loginEmail.focus();

        loginMessageElement.classList.remove('hidden');
        loginMessageElement.innerText = data.message;
      } else if (data.loginStatus === 'success') {
        localStorage.setItem('user', JSON.stringify(data.userId));

        location.href =
          'http://127.0.0.1:5500/1_frontend/pages/my-account.html';
      }
    });
};
//Events
//-------------
loginFormElement.addEventListener('submit', loginUser);
// --- SIGNUP ---
//------------

//variables
// -- DOM elements
const signUpFormElement = document.querySelector('#signupForm');
const signUpMessageElement = document.querySelector('#signupMessage');
//Functions
const signupUser = (e) => {
  e.preventDefault();

  if (e.target.signupPassword.value !== e.target.signupConfirmPassword.value) {
    signUpMessageElement.classList.remove('hidden');
    signUpMessageElement.innerHTML = `Passwords do not match`;

    e.target.signupPassword.value = ``;
    e.target.signupConfirmPassword.value = ``;
    return;
  }

  let user = {
    name: e.target.signupName.value,
    surname: e.target.signupSurname.value,
    email: e.target.signupEmail.value,
    password: e.target.signupPassword.value,
  };

  console.log(user);
  //SENDING DATA TO API ("api/users/signup")
  return fetch(REGISTER_USER_URI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.registrationStatus === 'failed') {
        e.target.signupPassword.value = ``;
        e.target.signupConfirmPassword.value = ``;
        e.target.signupEmail.value = ``;

        e.target.signupEmail.focus();

        signUpMessageElement.classList.remove('hidden');
        signUpMessageElement.innerText = data.message;
      } else if (data.registrationStatus === 'success') {
        localStorage.setItem('user', JSON.stringify(data.userId));

        location.href =
          'http://127.0.0.1:5500/1_frontend/pages/my-account.html';
      }
    });
};

//Events
signUpFormElement.addEventListener('submit', signupUser);
//-------------
