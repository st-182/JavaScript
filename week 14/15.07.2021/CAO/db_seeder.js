import mongoose from "mongoose";
import dotenv from "dotenv";

import Grape from "./models/grapeModel.js";
import Wine from "./models/wineModel.js";

dotenv.config();

let grapes = [
  {
    name: `Grape type 1`,
    origin: `Lithuania`,
    color: `green`,
  },
  {
    name: `Grape type 2`,
    origin: `Poland`,
    color: `red`,
  },
  {
    name: `Grape type 3`,
    origin: `Greece`,
    color: `purple`,
  },
  {
    name: `Grape type 4`,
    origin: `Italy`,
    color: `green`,
  },
  {
    name: `Grape type 5`,
    origin: `Spain`,
    color: `rose`,
  },
];

let wines = [
  {
    grape: `Grape type 1`,
    name: `Lithuania`,
    year: 2000,
  },
  {
    grape: `Grape type 1`,
    name: `Nice wine`,
    year: 2010,
  },
  {
    grape: `Grape type 1`,
    name: `Old Standard`,
    year: 1990,
  },
  {
    grape: `Grape type 2`,
    name: `Poland is Strong`,
    year: 2000,
  },
  {
    grape: `Grape type 2`,
    name: `Nice wine in Polska`,
    year: 2010,
  },
  {
    grape: `Grape type 2`,
    name: `Old Standard Polonia`,
    year: 1990,
  },
  {
    grape: `Grape type 3`,
    name: `Greece of grapes`,
    year: 2000,
  },
  {
    grape: `Grape type 3`,
    name: `Nice Mediterraneans`,
    year: 2010,
  },
  {
    grape: `Grape type 3`,
    name: `Old Standard Greece`,
    year: 1998,
  },
  {
    grape: `Grape type 4`,
    name: `Mafiozi Italyozi`,
    year: 2000,
  },
  {
    grape: `Grape type 4`,
    name: `Omgwine Italiana`,
    year: 2010,
  },
  {
    grape: `Grape type 4`,
    name: `Old Standard Italy`,
    year: 1856,
  },
  {
    grape: `Grape type 5`,
    name: `Spainus`,
    year: 2000,
  },
  {
    grape: `Grape type 5`,
    name: `Nice wine`,
    year: 2010,
  },
  {
    grape: `Grape type 5`,
    name: `Old Standard Spain`,
    year: 1995,
  },
];

// //Connecting mongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     console.log(`Connected to MongoDB from seeder`);
//     Grape.insertMany(grapes);
//     Wine.insertMany(wines);
//   })
//   .catch((err) => console.log(err));
