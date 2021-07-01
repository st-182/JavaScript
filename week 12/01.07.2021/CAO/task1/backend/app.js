//Pasirašyk NodeJS projektą, kuriame yra tik vienas GET request, kuris turi dinaminę nuorodą - paima automobilio markę (pvz. /cars/:brand). Pagal markę, paduoda/grąžina (su response) atitinkamą array iš cars objekto.
const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};
const express = require(`express`);
const cors = require(`cors`);
const app = express();
app.use(cors());

app.use(express.json());

app.get(`/:make`, (req, res) => {
  res.json(cars[req.params.make]);
});

app.listen(5000, () => console.log(`it works, don't worry :)`));
