const Car = require('../models/car');

const getCar = (req, res) => {
  const carId = req.params.id;

  Car.findById(carId)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getCar;
