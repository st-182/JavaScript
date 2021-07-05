const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);
require(`dotenv`).config();

const app = express();
const PORT = process.env.port; //|| 5000;

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(`connected to db`);
    //Start server
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

//Middlewares
app.use(express.json());
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
  { id: 1, make: "Opel", year: 1991 },
  { id: 2, make: "Mazda", year: 1999 },
  { id: 3, make: "Audi", year: 2004 },
];

app.get("/api/cars", function (req, res) {
  res.json(cars);
});

app.get("/api/cars/:id", function (req, res) {
  let car = cars.find((car) => car.id === +req.params.id);
  if (!car) res.status(404).send(`There is no cars with this id`);
  res.json(car);
});

app.post("/api/cars", function (req, res) {
  if (!req.body.make || !req.body.year || typeof req.body.year !== "number") {
    res.status(400).send("make and year are required");
    return;
  } //else {
  let newObj = {
    id: cars.length ? cars[cars.length - 1].id + 1 : 1,
    make: req.body.make,
    year: req.body.year,
  };
  cars.push(newObj);
  res.json({
    message: "new car added",
    cars: cars,
  });
  //}

  if (req.body.make && req.body.year) {
    console.log("ok");
  }
});

app.put("/api/cars/:id", function (req, res) {
  if (!req.body.make || !req.body.year || typeof req.body.year !== "number") {
    res.status(400).send("make and year are required");
    return;
  }
  cars.forEach((car) => {
    if (car.id === +req.params.id) {
      car.make = req.body.make;
      car.year = req.body.year;
      res.json({
        message: "Car updated!",
        cars: cars,
      });
    }
  });
});

app.delete("/api/cars/:id", function (req, res) {
  // cars.find(item=>item.id===req.params.id);
  let newCars = cars.reduce((total, currentItem) => {
    if (currentItem.id !== +req.params.id) total.push(currentItem);
    return total;
  }, []);
  cars.length = 0;
  cars.push(...newCars);

  res.json({
    message: "Car deleted!",
    cars: cars,
  });
});
