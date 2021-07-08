const Car = require(`../models/car`);

const getCars = (req, res) => {
  Car.findById(carID)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.export = getCars;
