import express from "express";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

//Routes
app.get(`/`, (req, res) => res.send(`API is running`));

//Starting server
app.listen(PORT, () =>
  console.log(`Server is running on ${PORT}`.yellow.underline)
);
