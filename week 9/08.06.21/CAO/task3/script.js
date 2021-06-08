//     Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.
const inputElement = document.querySelector(`input`);
// let nameA = inputElement.value;
// let name = Aristidas;

function toCookie(e) {
  e.preventDefault();
  let nameA = inputElement.value;

  console.log(`working`);
  console.log(nameA);
  console.log(document.cookie);

  if (document.cookie === `name=${nameA}`) {
    document
      .querySelector(`body`)
      .appendChild(document.createElement(`p`)).innerText = document.cookie;
    document
      .querySelector(`body`)
      .appendChild(
        document.createElement(`button`)
      ).innerText = `Delete cookie`;
    document
      .querySelector(`button:last-of-type`)
      .addEventListener(`click`, function deleteCookie() {
        document.cookie = `name=${nameA}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
      });
  } else {
    console.log(nameA);

    document.cookie = `name=${nameA}`;
  }
}

inputElement.addEventListener(`blur`, toCookie);
//     Į localStorage, įrašykite savo vardą, pavardę, aprašymą, linkus į FB, G+, Twitter, linką į nuotrauką. Informaciją galite įrašyti per console'ę, arba naudojant kodą projekte pirmą kart užkraunant puslapį. Vėliau susikurkite puslapį, kuris atvaizduos šią informaciją būtent taip:

// 3. Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma, tegul būna lentelė, būtent joje atsivaizduoja informacija iš localStorage array.
