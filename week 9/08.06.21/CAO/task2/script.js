//     Į localStorage, įrašykite savo vardą, pavardę, aprašymą, linkus į FB, G+, Twitter, linką į nuotrauką. Informaciją galite įrašyti per console'ę, arba naudojant kodą projekte pirmą kart užkraunant puslapį. Vėliau susikurkite puslapį, kuris atvaizduos šią informaciją būtent taip:

// window.onload = function () {
//   console.log(`one`);
//   localStorage.setItem(`name`, `Aristidas`);
//   localStorage.setItem(`surname`, `Jasudas`);
//   localStorage.setItem(
//     `about`,
//     `I like when instructors give us well prepared exercises`
//   );
//   localStorage.setItem(`link_FB`, `https://www.facebook.com/aristidas.j/`);
//   localStorage.setItem(`link_Inst`, `https://www.instagram.com/aristidas_j/`);
//   localStorage.setItem(
//     `link_IN`,
//     `https://www.linkedin.com/in/aristidas-jasudas-772027187/`
//   );
//   localStorage.setItem(
//     `link_Photo`,
//     `https://media-exp1.licdn.com/dms/image/C4D03AQFd7eYMBuAOPA/profile-displayphoto-shrink_200_200/0/1604415912085?e=1628726400&v=beta&t=jyILvIaBOthyXNTMXN25zPNBJDuNG-9No0IWIkiHn9s`
//   );
// };
document
  .querySelector(`img`)
  .setAttribute(`src`, localStorage.getItem(`link_Photo`));
document
  .querySelector(`a`)
  .setAttribute(`href`, localStorage.getItem(`link_FB`));
document
  .querySelector(`a:nth-of-type(2)`)
  .setAttribute(`href`, localStorage.getItem(`link_Inst`));
document
  .querySelector(`a:last-of-type`)
  .setAttribute(`href`, localStorage.getItem(`link_IN`));
document.querySelector(`p`).textContent = localStorage.getItem(`about`);
document.querySelector(`h4`).textContent = localStorage.getItem(`surname`);
document.querySelector(`h2`).textContent = localStorage.getItem(`name`);
