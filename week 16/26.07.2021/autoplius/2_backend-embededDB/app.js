import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import userAndCars from './models/usersAndCarsModel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//midlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then((response) => {
    console.log(`Connected to mongodb`.blue.underline.bold);
    //starting server
    app.listen(PORT, () => console.log(`server is running on ${PORT}`));
  });
//routes
app.get('/', (req, res) => res.send(`API is running...`));

//GET: all cars
app.get('/api/cars', (req, res) => {
  userAndCars.find({}).then((data) => res.json(data));
});

//GET: get single user based on id
app.get('/api/users/:id', (req, res) => {
  let userId = req.params.id;

  userAndCars.findById(userId).then((result) => {
    res.json(result);
  });
});

//POST: register new user
app.post('/api/users/signup', (req, res) => {
  let user = req.body;
  userAndCars.find().then((result) => {
    const userExists = result.some(
      (userFromDB) => userFromDB.email === user.email
    );
    if (userExists) {
      res.json({
        registrationStatus: 'failed',
        message: 'User with given email already exists',
      });
    } else {
      user.cars = [];

      const newUser = new userAndCars(user);

      newUser.save().then((result) => {
        let { _id } = result;
        res.json({
          registrationStatus: 'success',
          userId: _id,
        });
      });
    }
  });
});
//POST: log in existing user
app.post('/api/users/login', (req, res) => {
  let user = req.body;
  userAndCars.find().then((result) => {
    let userFounded = result.find(
      (userFromDB) =>
        userFromDB.email === user.email && userFromDB.password === user.password
    );
    if (userFounded) {
      //is gauto objekto pasiimam konkrecia savybe
      let { _id } = userFounded;

      res.json({
        loginStatus: 'success',
        userId: _id,
      });
    } else {
      res.status(401).json({
        loginStatus: 'failed',
        message: 'Given email or passwords is incorrect',
      });
    }
  });
});

//PUT: delete single car by its id
app.put('/api/cars/delete/:id', async (req, res) => {
  let { userId, carId } = req.body;

  let userFromDB = await userAndCars.findById(userId);
  console.log(userFromDB);
  let carToDeleteIndex = userFromDB.cars.findIndex(
    (car) => '' + car._id == '' + carId
  );

  userFromDB.cars.splice(carToDeleteIndex, 1);

  userAndCars.findByIdAndUpdate(userId, userFromDB).then((result) => {
    res.json(userFromDB);
  });
});

//----------------------------------------------
//RES API
/*
GET:  /api/cars             l Get all cars
      /api/users/:id         l Get single user based on id


POST:   /api/user/signup    l Register new user
        /api/user/login     l Log in existing user

PUT:    /api/cars/delete/:id      l Delete single car based on it's id
*/
