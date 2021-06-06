// Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.

// Pvz.:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge() {
    if (this.age > 18) {
      return console.log(`Petras is old enough to drink`);
    } else {
      return console.log(`Petras is NOT old enough to drink`);
    }
  }
}

const p1 = new Person("Petras", 16);
p1.compareAge();

// 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]
function numbersBack(arr) {
  return arr.map((item) => item).filter((item) => item === +item);
}
console.log(numbersBack([1, 5, "a", "g", "z", 6]));

// 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"
function dubleBack(str) {
  return str
    .split(``)
    .map((item) => {
      if (!Number(item) && item !== ` `) {
        return item + item;
      } else {
        return item;
      }
    })
    .join(``);
}

console.log(dubleBack("Petras 123 Slekys"));
console.log(Number(`a`));

// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.
function isPostcode(a) {
  let postCode = a.replace(" ", "incorrect");
  console.log(postCode);
  let str = postCode + ``;
  let numOfNum = str.split(``).filter((item) => item == +item).length;
  let numOfStr = str.split(``).filter((item) => Number(item) !== +item).length;
  console.log(numOfNum, numOfStr);
  if (
    (postCode > 9999 && postCode < 100000) ||
    (numOfNum === 3 && numOfStr === 2)
  ) {
    return console.log(`Post code is correct`);
  } else {
    return console.log(`Post code is incorrect! Error 404`);
  }
}
isPostcode(`100ab`);

// 5. Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".
// pvz:

function jazzify(arr) {
  arr.forEach((item, index) => {
    console.log(item.length);
    if (item.charAt(item.length - 1) != 7) {
      arr[index] = item + 7;
    }
  });
  return arr;
}

console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify(["a", "bb", "ccc", "dddd7", "d7d", "0"]));
//jazzify(["G", "F", "C"]); // ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []
