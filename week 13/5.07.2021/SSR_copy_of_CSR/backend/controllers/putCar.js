const Car = require('../models/car');

const putCar = (req, res) => {
  // -- validation for user inputs
  if (!req.body.make || !req.body.model || !req.body.year || !req.body.color) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }
  // -- if valdiation passes, updating car
  let carId = req.params.id;

  Car.findByIdAndUpdate(carId, req.body)
    .then((data) => res.json({ message: 'Car updated!' }))
    .catch((err) => console.log(err));
};

module.exports = putCar;
