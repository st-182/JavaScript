// imports
import btoa from "btoa";
import colors from "colors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import mongoose from "mongoose";
import Product from "./models/productModel.js";
dotenv.config();

// Connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    updateDatabase();
    setInterval(updateDatabase, 600000);
  })
  .catch((err) => console.log(err));
  

const updateDatabase = async () => {
  let products = [];
  // -- getting data from Hypeformat
  const hypeformatResponse = await fetch(process.env.HYPEFORMAT_PRODUCTS, {
    method: "GET",
    headers: {
      Authorization:
        "Basic " +
        btoa(
          `${process.env.HYPEFORMAT_CONSUMER_KEY}:${process.env.HYPEFORMAT_CONSUMER_SECRET}`
        ),
    },
  });
  const hypeformatProducts = await hypeformatResponse.json();
  hypeformatProducts.forEach((product) => {
    let newProduct = {
      name: product.name,
      price: +product.price,
      image: product.images[0].src,
      rating: +product.average_rating,
    };
    product.categories.forEach((category) => {
      switch (category.id) {
        case 29:
          newProduct.category = "Canvases";
          break;
        case 30:
          newProduct.category = "Posters";
          break;
        case 38:
          newProduct.category = "Stickers";
          break;
      }
    });
    products.push(newProduct);
  });
  // -- getting data from Per4media
  const per4MediaResponse = await fetch(process.env.PER4MEDIA_PRODUCTS, {
    method: "GET",
    headers: {
      Authorization:
        "Basic " +
        btoa(
          `${process.env.PER4MEDIA_CONSUMER_KEY}:${process.env.PER4MEDIA_CONSUMER_SECRET}`
        ),
    },
  });

  const per4MediaProducts = await per4MediaResponse.json();

  per4MediaProducts.forEach((product) => {
    let newProduct = {
      name: product.name,
      price: +product.price,
      image: product.images[0].src,
      rating: +product.average_rating,
    };
    product.categories.forEach((category) => {
      switch (category.id) {
        case 50:
          newProduct.category = "Calendars";
          break;
        case 45:
          newProduct.category = "Cups";
          break;
        case 47:
          newProduct.category = "Posters";
          break;
        case 48:
          newProduct.category = "Stickers";
          break;
      }
    });
    products.push(newProduct);
  });

  // -- updating "hypeformat_per4media_DB" database
  // -- deleting previous data
  const deletedPreviousProducts = await Product.deleteMany();
  // -- sending new data
  const insertNewProducts = await Product.insertMany(products);
};
updateDatabase();
setInterval(updateDatabase, 600000);

