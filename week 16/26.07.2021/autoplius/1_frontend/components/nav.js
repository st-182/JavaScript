//variables
// --DOM elements
const nav = document.querySelector('nav');
//functions
const showNav = () => {
  // -- creating html elements
  // const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');

  // -- adding content and atributes to created HTML elemnts
  // console.log(location.href.includes('pages'));
  a1.href = location.href.includes('pages') ? '../index.html' : 'index.html';
  a1.innerText = 'Home';

  let user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    a2.href = location.href.includes('pages')
      ? 'my-account.html'
      : './pages/my-account.html';
    a2.innerHTML = '<i class="fas fa-user"></i> My account';
  } else {
    a2.href = location.href.includes('pages')
      ? 'login.html'
      : './pages/login.html';
    a2.innerHTML = 'Login/Sign up<i class="fas fa-sign-in-alt"></i>';
  }

  // -- append elements
  li1.appendChild(a1);
  li2.appendChild(a2);

  ul.appendChild(li1);
  ul.appendChild(li2);

  nav.appendChild(ul);
};
//events
document.addEventListener('DOMContentLoaded', showNav);
