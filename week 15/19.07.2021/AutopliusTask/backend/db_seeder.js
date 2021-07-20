import UserAndCars from "./model/userAndCars.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
let dataCollection = [
  {
    name: `Petras`,
    surname: `Slekys`,
    email: `example@gmail.com`,
    password: `as_petras_bmw_legal_age`,
    cars: [
      {
        make: `BMW`,
        model: `E30`,
        year: 1990,
        price: 2000,
      },
      {
        make: `Mini`,
        model: `Cooper`,
        year: `2005`,
        price: `7000`,
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    // console.log(`Connected to MongoDB`.cyan.italic);
    // // starting server
    // app.listen(PORT, () =>
    //   console.log(`Server is running on ${PORT}...`.rainbow)
    // );
    // UserAndCars.insertMany(dataCollection);
  });
