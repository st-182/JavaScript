// Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)
document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault(e);
  let times = e.target[1].value;
  for (i = 0; i < times; i++) {
    const li = document.createElement(`li`);
    document.querySelector(`ul`).appendChild(li).textContent =
      e.target[0].value;
  }
});
//  ${e.target[0].value}
