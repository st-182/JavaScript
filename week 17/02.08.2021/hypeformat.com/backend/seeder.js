//importing modules to the seeder.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import btoa from "btoa";

//importing SCHEMA in order to push products into mongoDB
import productModel from "./models/productsModel.js";

//configuring dotenv, so important EndPoints are hidden from the main code
dotenv.config();

//Starting mongoose
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

//Sending data to DB (deleting old and uploading new every minute)
const mongooseConnectAndSend = (data) => {
  productModel.deleteMany({}, () =>
    console.log(`Current cluster items are: deleted`)
  );
  productModel.insertMany(data, () =>
    console.log(`Current cluster items are: uploaded`)
  );
};

//Getting data from Endpoints (categories are different (codes does not match), so if operator works without mistakes for selected EndPoints)
const getDataFromEndPoint = async (ENDPOINT, KEY, SECRET) => {
  let products = [];
  await fetch(ENDPOINT, {
    method: `GET`,
    headers: {
      Authorization: "Basic " + btoa(`${KEY}:${SECRET}`),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        products.push({
          name: item.name,
          category: item.categories.reduce((acc, category) => {
            //hypeformat
            category.id === 29
              ? (acc = `Canvases`)
              : category.id === 30
              ? (acc = `Posters`)
              : category.id === 38
              ? (acc = `Stickers`)
              : category.id === 43 //per4mmedia
              ? (acc = `Apparels`)
              : category.id === 45
              ? (acc = `Cups`)
              : category.id === 47
              ? (acc = `Posters`)
              : category.id === 48
              ? (acc = `Stickers`)
              : category.id === 50
              ? (acc = `Calendars`)
              : (acc = `No category`);
            return acc;
          }, ``),
          price: +item.price,
          image: item.images[0].src,
          rating: +item.average_rating,
        });
      });
    });
  return products;
};

//Main function
//calls get function -> gets all data and pushes it to the products array
//calls mongoose function -> updates data in cloud noSQL database
const updateDatabase = async () => {
  let products = [];

  // getting data from HypeFormat
  let HYPEFORMAT = await getDataFromEndPoint(
    process.env.HYPEFORMAT_PRODUCTS,
    process.env.HYPEFORMAT_CONSUMER_KEY,
    process.env.HYPEFORMAT_CONSUMER_SECRET
  );
  await console.log(`HYPEFORMAT done `, HYPEFORMAT.length);

  //getting data from Per4mmedia
  let CUPS = await getDataFromEndPoint(
    process.env.PER4MMEDIA_CUPS,
    process.env.PER4MMEDIA_CONSUMER_KEY,
    process.env.PER4MMEDIA_CONSUMER_SECRET
  );
  console.log(`PER4MMEDIA_CUPS done `, CUPS.length);
  let POSTERS = await getDataFromEndPoint(
    process.env.PER4MMEDIA_POSTERS,
    process.env.PER4MMEDIA_CONSUMER_KEY,
    process.env.PER4MMEDIA_CONSUMER_SECRET
  );
  console.log(`PER4MMEDIA_POSTERS done `, POSTERS.length);

  let STICKERS = await getDataFromEndPoint(
    process.env.PER4MMEDIA_STICKERS,
    process.env.PER4MMEDIA_CONSUMER_KEY,
    process.env.PER4MMEDIA_CONSUMER_SECRET
  );
  console.log(`PER4MMEDIA_STICKERS done `, STICKERS.length);

  let CALENDARS = await getDataFromEndPoint(
    process.env.PER4MMEDIA_CALENDARS,
    process.env.PER4MMEDIA_CONSUMER_KEY,
    process.env.PER4MMEDIA_CONSUMER_SECRET
  );
  console.log(`PER4MMEDIA_CALENDARS done `, CALENDARS.length);

  let APPARELS = await getDataFromEndPoint(
    process.env.PER4MMEDIA_APPARELS,
    process.env.PER4MMEDIA_CONSUMER_KEY,
    process.env.PER4MMEDIA_CONSUMER_SECRET
  );
  console.log(`PER4MMEDIA_APPARELS done `, APPARELS.length);

  products.push(...HYPEFORMAT);
  products.push(...CUPS);
  products.push(...POSTERS);
  products.push(...STICKERS);
  products.push(...CALENDARS);
  products.push(...APPARELS);

  console.log(products.length);
  mongooseConnectAndSend(products);
};
