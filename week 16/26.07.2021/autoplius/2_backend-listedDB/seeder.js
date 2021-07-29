import mongoose from 'mongoose';
import User from './models/usersModel.js';
import Car from './models/carModel.js';
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
    };
    let cars = [
      {
        make: 'Volvo',
        model: 'PolarSar',
        year: 2021,
        price: 60000,
      },
      {
        make: 'Volvo',
        model: 'PolarSar',
        year: 2021,
        price: 60000,
      },
      {
        make: 'Volvo',
        model: 'PolarSar',
        year: 2021,
        price: 60000,
      },
    ];
    User.insertMany(user);
    Car.insertMany(cars);
    console.log('data sebded to mongodb');
  });
