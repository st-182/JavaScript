const Car = require('../models/car');

const deleteCar = (req, res) => {
  let carId = req.params.id;

  Car.findByIdAndDelete(carId)
    .then((data) => res.json({ message: 'Car deleted!' }))
    .catch((err) => console.log(err));
};

module.exports = deleteCar;
