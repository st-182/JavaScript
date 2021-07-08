const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);
const Car = require(`./models/car`);
require(`dotenv`).config();

const app = express();
const PORT = process.env.port; //|| 5000;

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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

//Controllers
const getCars = require(`./controllers/getCars`);

//Routes
//get
app.get(`/`, function (req, res) {
  res.send(`empty page, sorry, my`);
});

app.get(`/api`, function (req, res) {
  res.send(`one`);
  //   res.render(`<p>one</p>`);
});

app.get(`/api/numbers`, function (req, res) {
  res.send({ this: [`<p>one</p>`, 2, 3, 4, 5] });
  //   res.render(`<p>one</p>`);
});

// Get method and parameters
app.get(`/api/numbers/:id`, function (req, res) {
  res.json(`data`);
});

app.get(`/api/numbers/:id/:username`, function (req, res) {
  res.send(req.params);
});

// let cars = [
//   { id: 1, make: `Opel`, year: 1991 },
//   { id: 2, make: `Mazda`, year: 1999 },
//   { id: 3, make: `Audi`, year: 2004 },
// ];

app.get(`/api/cars`, function (req, res) {
  Car.find().then((data) => res.json(data));
  // res.json(`cars`);
});

app.get(`/api/cars/:id`, function (req, res) {
  const carID = req.params.id;
  Car.findById(carID)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.post(`/api/cars`, function (req, res) {
  if (
    !req.body.make ||
    !req.body.model ||
    !req.body.year ||
    typeof req.body.year !== `number` ||
    !req.body.color
  ) {
    res.status(400).json({ message: `All fields are required` });
    return;
  } //else {
  // let newObj = {
  //   //id: cars.length ? cars[cars.length - 1].id + 1 : 1,
  //   make: req.body.make,
  //   model: req.body.model,
  //   year: req.body.year,
  //   color: req.body.color,
  // };
  // console.log(newObj);
  // cars.push(newObj);

  const car = new Car(req.body);
  car
    .save()
    .then((data) => res.json(`New car added`))
    .catch((err) => console.log(err));

  // res.json({
  //   message: `new car added`,
  //   //cars: cars,
  // });
  //}

  // if (req.body.make && req.body.year) {
  //   console.log(`ok`);
  // }
});

app.put(`/api/cars/:id`, function (req, res) {
  if (
    !req.body.make ||
    !req.body.model ||
    !req.body.year ||
    typeof req.body.year !== `number` ||
    !req.body.color
  ) {
    res.status(400).json({ message: `All fields are required` });
    return;
  }
  const carID = req.params.id;
  console.log(req.body);
  Car.findByIdAndUpdate(carID, req.body)
    .then((data) => {
      console.log(`car updated`);
      res.json({
        message: `Car updated!`,
      });
    })
    .catch((err) => console.log(err));

  // cars.forEach((car) => {
  //   if (car.id === +req.params.id) {
  //     car.make = req.body.make;
  //     car.year = req.body.year;
  //     res.json({
  //       message: `Car updated!`,
  //       cars: cars,
  //     });
  //   }
  // });
});

app.delete(`/api/cars/:id`, function (req, res) {
  // cars.find(item=>item.id===req.params.id);
  const carID = req.params.id;

  Car.findByIdAndDelete(carID)
    .then((data) =>
      res.json({
        message: `Car deleted!`,
      })
    )
    .catch((err) => console.log(err));
});
