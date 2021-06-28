//    Susikuriame aplanką, kuriame dirbsime.
// Viduj aplanko, susikuriame index.js file'ą. O jame įrašome - console.log("Hello"). Paleidžiame (node index.js) ir taip patikriname, ar veikia pats NodeJS.
// Susikuriame package.json file'ą rankomis. Jame įsirašome konfigūracinius duomenis (šiuo metu reikės - title, version ir scripts - kuris bus objektas ir turės start scriptą - jis paleist node index.js). Būtent scripts veikia kaip shortcut'as - parašom npm start, o pasileidžia node index.js (kartais eilutės atrodys daug baisiau - pvz.: node index.js --u --ENV=TEST --CASE=GC, tad galimybė pasirašyti shortcut'ą labai praverčia).
// Su npm įsidiegiame paketą pavadinimu 'casual'. Daugiau apie jį čia.
// Vietoj console.log, importuojame šį modulį į index.js.
// Importavę, iš karto panaudojame - console turi išmesti random miestą kiekvieną kartą paleidus šį kodą.
// Pakoreguojame kodą. Tegul dabar konsolė atspausdina du dalykus: ir random miestą, ir random skaičių nuo 1 iki 10 (o random skaičių generuoti juk dar mokame su Math.random()).
// Casual pluginas gali ne tik miestą sugeneruoti, bet ir įvairiausius kitus parametrus. Pridedame (prie console.log), kad "Mr Petras Slekys" (bus atsitiktiniai duomenys: suffix + first name + last name).

//    Susikuriame aplanką, kuriame dirbsime.
//     Viduj aplanko, susikuriame index.js file'ą. O jame įrašome - console.log("Hello"). Paleidžiame (node index.js) ir taip patikriname, ar veikia pats NodeJS.
//     Susikuriame package.json file'ą rankomis. Jame įsirašome konfigūracinius duomenis (šiuo metu reikės - title, version ir scripts - kuris bus objektas ir turės start scriptą - jis paleist node index.js). Būtent scripts veikia kaip shortcut'as - parašom npm start, o pasileidžia node index.js (kartais eilutės atrodys daug baisiau - pvz.: node index.js --u --ENV=TEST --CASE=GC, tad galimybė pasirašyti shortcut'ą labai praverčia).
//     Su npm įsidiegiame paketą pavadinimu 'casual'. Daugiau apie jį čia.
//     Vietoj console.log, importuojame šį modulį į index.js.
//     Importavę, iš karto panaudojame - console turi išmesti random miestą kiekvieną kartą paleidus šį kodą.
//     Pakoreguojame kodą. Tegul dabar konsolė atspausdina du dalykus: ir random miestą, ir random skaičių nuo 1 iki 10 (o random skaičių generuoti juk dar mokame su Math.random()).
//     Casual pluginas gali ne tik miestą sugeneruoti, bet ir įvairiausius kitus parametrus. Pridedame (prie console.log), kad "Mr Petras Slekys" (bus atsitiktiniai duomenys: suffix + first name + last name).

// Super, sukūrėme sistemą, kuri veikia back-end'e ir naudoja svetimo žmogaus sukurtą modulį! Nebijokite, pasidomėkite ir kokie kiti moduliai yra ir kaip juos galite pritaikyti!

//? console.log("Hello");
const casual = require("casual");
let sentence = casual.sentence;
console.log(sentence);
console.log(casual.city);
console.log(casual.integer((from = 0), (to = 10)));
console.log(casual.name_suffix, casual.first_name, casual.last_name);

casual.define("point", function () {
  return {
    x: Math.round(Math.random() * 10),
    y: Math.round(Math.random() * 10),
  };
});
console.log(casual.point);
