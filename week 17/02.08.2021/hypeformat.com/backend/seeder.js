import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import btoa from "btoa";

import productModel from "./models/productsModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then((response) => {
    console.log(`Connected to mongodb`);
    updateDatabase();
    setInterval(() => {
      updateDatabase();
    }, 60000);
  });
const updateDatabase = async () => {
  let products = [];

  //getting data from HypeFormat
  const hypeFormatResponse = await fetch(process.env.HYPEFORMAT_CANVASES, {
    method: `GET`,
    headers: {
      Authorization:
        "Basic " +
        btoa(
          `${process.env.HYPEFORMAT_CONSUMER_KEY}:${process.env.HYPEFORMAT_CONSUMER_SECRET}`
        ),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        products.push({
          name: item.name,
          category: item.categories.reduce((acc, category) => {
            category.id === 29
              ? (acc = `Canvases`)
              : category.id === 30
              ? (acc = `Posters`)
              : category.id === 38
              ? (acc = `Stickers`)
              : (acc = `No category`);
            return acc;
          }, ``),
          price: +item.price,
          image: item.images[0].src,
          rating: +item.average_rating,
        });
      });
      //   console.log(products);
      mongooseConnectAndSend(products);
    });
  //getting data from Per4mmedia
};

const mongooseConnectAndSend = (data) => {
  productModel.deleteMany({}, () => console.log(`deleted`));
  productModel.insertMany(data, () => console.log(`uploaded`));
};
