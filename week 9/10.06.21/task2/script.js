// Sukurkite items.json failą iš duoto masyvo su objektais;
// Padarykite kreipimąsį jūsų items.json dokumentą ir index.html dokumente atvaizduokite infomraciją iš jo (tik užkrovus puslapį)
document.addEventListener(`DOMContentLoaded`, () => {
  fetch(`items.json`)
    .then((response) => response.json())
    .then((data) =>
      data
        .filter((item) => item.id % 2 !== 0)
        .forEach((element) => {
          console.log(element);

          document.body.appendChild(document.createElement(`p`)).textContent =
            "id: " + element.id;
          document.body.appendChild(document.createElement(`p`)).textContent =
            "title: " + element.title;
        })
    );
});
