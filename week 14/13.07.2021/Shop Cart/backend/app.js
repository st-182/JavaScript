import express from "express";
import cors from "cors";
// if using DB - here goes mongoose

import products from "./db/products.js";

const app = express();

app.use(cors());

app.get(`/`, (req, res) => {
  res.send(`API is running`);
});

app.get(`/api/products`, (req, res) => {
  res.json(products);
});

app.listen(5000);
