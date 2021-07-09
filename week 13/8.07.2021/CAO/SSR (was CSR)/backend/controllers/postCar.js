const Car = require('../models/car');

const postCar = (req, res) => {
  // -- validation for user inputs
  if (!req.body.make || !req.body.model || !req.body.year || !req.body.color) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }
  // -- if valdiation passes, adding new car
  const car = new Car(req.body);

  car
    .save()
    .then((data) => {
      res.json({ message: 'New car added!' });
    })
    .catch((err) => console.log(err));
};

module.exports = postCar;
