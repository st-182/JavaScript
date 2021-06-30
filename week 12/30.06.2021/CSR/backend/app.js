// const express = require(`express`);
// const app = express();
// const port = 3000;

// app.get(`/`, (req, res) => {
//   res.send(`Hello World!`);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const express = require(`express`);
const cors = require(`cors`);
require(`dotenv`).config();
const app = express();
const PORT = process.env.port; //|| 5000;

//Middlewares
app.use(
  cors({
    origin: `http://127.0.0.1:5500`,
  })
);
//Routes
//get
app.get("/", function (req, res) {
  res.send("empty page, sorry, my");
});

app.get("/api", function (req, res) {
  res.send("one");
  //   res.render(`<p>one</p>`);
});

app.get("/api/numbers", function (req, res) {
  res.send({ this: [`<p>one</p>`, 2, 3, 4, 5] });
  //   res.render(`<p>one</p>`);
});

// Get method and parameters
app.get("/api/numbers/:id", function (req, res) {
  res.send(req.params.id);
});

app.get("/api/numbers/:id/:username", function (req, res) {
  res.send(req.params);
});

let cars = [
  { id: 1, make: "Opel" },
  { id: 2, make: "Mazda" },
  { id: 3, make: "Audi" },
];

app.get("/api/cars", function (req, res) {
  res.json(cars);
});

app.get("/api/cars/:id", function (req, res) {
  let data = cars.find((car) => car.id === +req.params.id);
  if (!data) res.status(404).send(`There is no cars with this id`);
  res.json(data.make);
});
//Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
