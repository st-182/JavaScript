const headerElement = document.querySelector(`header`);
const navElement = document.querySelector(`nav`);

const showHeader = () => {
  // adding header
  const ul = document.createElement(`ul`);
  const li1 = document.createElement(`li`);
  const li2 = document.createElement(`li`);
  const a1 = document.createElement(`a`);
  const a2 = document.createElement(`a`);

  // adding content and attributes
  a1.href = location.href.incudes(`pages`)
    ? `my-account.html`
    : `./pages/my-account.html`;
  a2.innerText = `My account`;

  a1.textContent = `Home`;
  a2.href = `index.html`;

  // appending
  li1.appendChild(a1);
  ul.appendChild(li1);
  navElement.appendChild(ul);
};

document.addEventListener(`DOMContentLoaded`, showHeader);
