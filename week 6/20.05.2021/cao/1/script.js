// Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".
// const bonus = 50;
// document.querySelector(`form`).addEventListener(`submit`, calculator);
// function calculator(e) {
//   e.preventDefault();
//   let yearsWorked = document.querySelector(`input:first-child`).value;
//   yearsWorked >= 10 && yearsWorked < 20
//     ? alert(`Your bonus is ${bonus * 2}`)
//     : yearsWorked >= 20
//     ? alert(`Your bonus is ${bonus * 4}`)
//     : alert(`Your bonus is ${bonus}`);
// }
const bonus = 50;
document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  let yearsWorked = document.querySelector(`input:first-child`).value;
  yearsWorked >= 10 && yearsWorked < 20
    ? alert(`Your bonus is ${bonus * 2}`)
    : yearsWorked >= 20
    ? alert(`Your bonus is ${bonus * 4}`)
    : alert(`Your bonus is ${bonus}`);
});

