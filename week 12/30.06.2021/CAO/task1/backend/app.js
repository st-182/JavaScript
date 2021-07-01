//1. Susikurkite naują node.js pratimą, įsidiekite express/cors.

// 2. Sukurkite array, kuriame bus saugomi mašinų brand'ai.

// 3. Sukurkite GET, kuris paduos visą array.

// 4. Sukurkite POST, kuris į array įrašys naują automobilio brandą.

// Testuokite su PostMan.
const express = require(`express`);
const cors = require(`cors`);
const app = express();
app.use(cors());
// app.use(
//   cors({
//     origin: `http://127.0.0.1:5500`,
//   })
// );
app.use(express.json());

let BMW = [
  {
    name: `cool BMW`,
    model: `E39`,
    country: `Lithuania`,
    driver: `Crazy BMW fan Petras`,
  },
  {
    name: `new BMW`,
    model: `i4 M50`,
    country: `Lithuania`,
    driver: `Crazy BMW fan Petras`,
  },
  {
    name: `old peace of crap BMW`,
    model: `X5`,
    country: `Lithuania`,
    driver: `Crazy BMW fan Petras`,
  },
  {
    name: `classic BMW`,
    model: `E30`,
    country: `Lithuania`,
    driver: `Crazy BMW fan Petras`,
  },
  {
    name: `not BMW`,
    model: `A6`,
    country: `Lithuania`,
    driver: `every other Lithuanian`,
  },
];

app.get(`/`, (req, res) => {
  res.json(BMW);
});

app.post(`/`, (req, res) => {
  BMW.push(req.body);
  console.log("added new item");
  res.send(BMW);
});

app.listen(5000, () => console.log(`it works, don't worry :)`));
