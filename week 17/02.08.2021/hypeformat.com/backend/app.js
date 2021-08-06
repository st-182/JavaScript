//https://per4mmedia.com/wp-json/wc/v3/products/categories?consumer_key=ck_491a09079cd9b7678c4c09fbbab2bf55275b5797&consumer_secret=cs_835582a4141ea2f3ac9800573066b48153aaeb34
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

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
//-returns all products
app.get(`/api`, (req, res) => {
  productModel.find().then((response) => {
    res.json(response);
  });
});

//-returns any category
app.get(`/api/:category`, (req, res) => {
  let category = req.params.category;

  category = category.substr(0, 1).toUpperCase() + category.slice(1, 20);

  productModel.find().then((response) => {
    res.json(response.filter((product) => product.category === category));
  });
});
//-returns any category with possibility to specify the shop-provider
app.get(`/api/:category/:shop`, (req, res) => {
  let category = req.params.category;
  category = category.substr(0, 1).toUpperCase() + category.slice(1, 20);
  const shop = req.params.shop;
  productModel.find().then((response) => {
    res.json(
      response.filter(
        (product) =>
          (product.category === category) &
          (product.image.slice(8, 18) === shop)
      )
    );
  });
});

//Starting server
app.listen(PORT, () => console.log(`Starting on port:${PORT}`));
