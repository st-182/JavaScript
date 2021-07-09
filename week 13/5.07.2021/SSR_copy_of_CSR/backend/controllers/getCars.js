const Car = require('../models/car');

const getCars = (req, res) => {
  Car.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getCars;
