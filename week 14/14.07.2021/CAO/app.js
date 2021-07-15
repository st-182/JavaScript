const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");

const Bar = require("./models/barModel");

require("dotenv").config();

const app = express();

//Controllers
const { homePage } = require(`./controllers/pages.controller.js`);

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

// Middlewares
app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// -- adding ejs template engine to project
app.set("view engine", "ejs");

// Database
// it was transferred to db_seeder.js

// Routes
// -- Home page
app.get("/", homePage);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});

// start server is moved to mongoDB promice
