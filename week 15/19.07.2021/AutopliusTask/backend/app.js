import express from "express";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import UserAndCars from "./model/userAndCars.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`.cyan.italic);
    // starting server
    app.listen(PORT, () =>
      console.log(`Server is running on ${PORT}...`.rainbow)
    );
  });

//Routes
app.get(`/`, (req, res) => res.send(`API is running`));

//Routes
app.get(`/api/cars`, (req, res) => {
  UserAndCars.find().then((data) => res.json(data));
});
