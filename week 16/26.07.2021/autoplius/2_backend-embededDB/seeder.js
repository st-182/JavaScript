import mongoose from 'mongoose';
import userAndCars from './models/usersAndCarsModel.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let user = {
      name: 'Modestino',
      surname: 'VanDam',
      email: 'lampapap@mail.com',
      password: 'pass169',
      cars: [
        {
          make: 'Volvo',
          model: 'PolarSar',
          year: 2021,
          price: 60000,
        },
        {
          make: 'Opel',
          model: 'Ascona',
          year: 1990,
          price: 300,
        },
      ],
    };
    userAndCars.insertMany(user);
    console.log('data sebded to mongodb');
  });
