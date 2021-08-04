import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();
dotenv.config();

import productModel from "./models/productsModel.js";

const PORT = process.env.PORT;

//Starting mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then((response) => {
    console.log(`Connected to mongodb`);
  });

// Routes
app.get(`/`, (req, res) => {
  productModel.find().then();
  res.send(`API is running`);
});

//Starting server
app.listen(PORT, () => console.log(`Starting on port:${PORT}`));
