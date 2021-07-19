import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

import { showGrapesAndWine } from "./controllers/pages.controller.js";
import Grape from "./models/grapeModel.js";

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(`connection to mongoose established`);
    app.listen(process.env.PORT, () => console.log(`server is running`));
  })
  .catch((err) => console.log(err));

app.get(`/`, showGrapesAndWine);
