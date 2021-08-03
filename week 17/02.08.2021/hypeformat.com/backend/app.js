import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();
dotenv.config();

import productModel from "./models/productsModel.js";

const PORT = process.env.PORT;

// Routes
app.get(`/`, (req, res) => res.send(`API is running`));

//Starting server
app.listen(PORT, () => console.log(`Starting on port:${PORT}`));
