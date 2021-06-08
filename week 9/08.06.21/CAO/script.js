// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()
// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip pvz. substraction). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.
// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.
// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

function calculateValue(num1, num2, action) {
  console.log(!isNaN(num1), !isNaN(num2));
  if (!isNaN(num1) && !isNaN(num2)) {
    if (action === `addition`) {
      return addition(num1, num2);
    } else if (action === `subtraction`) {
      return subtraction(num1, num2);
    } else if (action === `multiplication`) {
      return multiplication(num1, num2);
    } else if (action === `division`) {
      return division(num1, num2);
    } else {
      `error404 math operator is not defined properly `;
    }
  } else {
    return `incorrect values number 1 and number 2`;
  }
}
function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}

console.log(calculateValue(1, 1, `subtraction`));
