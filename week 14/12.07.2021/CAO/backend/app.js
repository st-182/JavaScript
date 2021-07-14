// 1. Vadovaujantis šiuo pavyzdžiu ir instrukcijomis, sukurkite el. puslapį, kuriame būtų trys blokai - vienas su jūsų vardu (paduotu iš NodeJS kaip intarpu), kitas su jūsų amžiumi ir galiausiai - el. pašto adresu.
const express = require(`express`);
const colors = require(`colors`);
const cors = require(`cors`);
const dotenv = require(`dotenv`);
const mongoose = require(`mongoose`);

require("dotenv").config();
const app = express();
app.set("view engine", "ejs");
const User = require("./models/postModel");

//Connecting mongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`Connected to MongoDB`.blue.underline);
    // --- STARTING SERVER ---
    app.listen(process.env.PORT, () =>
      console.log(
        `Server is running on port ${process.env.PORT}`.yellow.underline.bold
      )
    );
  })
  .catch((err) => console.log(err));

/* GET home page. */
  app.get("/", (req, res) => {
    User.find().then((response) => {
      res.render("index", { title: "Home", data: response });
    });
  });
