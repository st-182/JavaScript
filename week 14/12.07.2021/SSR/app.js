const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");

const Post = require("./models/postModel");

require("dotenv").config();

const app = express();

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
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// -- adding ejs template engine to project
app.set("view engine", "ejs");

// Database
// it was transfered to db_seeder.js

// Routes
// -- Home page
app.get("/", (req, res) => {
  // res.render("index", { title: "Home", posts: posts });
  Post.find()
    .then((result) => res.render("index", { title: "Home", posts: result }))
    .catch((err) => console.log(err));
});

// About Me page
app.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

// My Blog page
app.get("/blog", (req, res) => {
  // res.render("blog", { title: "My Blog", posts: posts });
  Post.find()
    .then((result) => res.render("blog", { title: "My blog", posts: result }))
    .catch((err) => console.log(err));
});

// -- single post page
app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  // let post = posts.find((post) => {
  //   return post.id === id;
  // });
  // console.log(post);
  // res.render("post", { title: post.title, post: post });
  Post.findById(id)
    .then((result) => res.render("post", { title: result.title, post: result }))
    .catch((err) => console.log(err));
});

app.post("/blog", (req, res) => {
  // console.log(req.body);
  const post = new Post(req.body);
  post
    .save()
    .then((result) => res.redirect("admin"))
    .catch((err) => console.log(err));
  // Post.find()
  //   .then((result) =>
  //     res.render("admin", { title: "ADMIN PANEL", posts: result })
  //   )
  //   .catch((err) => console.log(err));
});

app.delete("/blog/:id", (req, res) => {
  const id = req.params.id;
  // let post = posts.find((post) => {
  //   return post.id === id;
  // });
  // console.log(post);
  // res.render("post", { title: post.title, post: post });
  Post.findByIdAndDelete(id)
    .then((result) => res.json({ message: "post deleted" }))
    .catch((err) => console.log(err));
});

// ADMIN page
app.get("/admin", (req, res) => {
  // res.render("admin", { title: "ADMIN PANEL", posts: posts });
  Post.find()
    .then((result) =>
      res.render("admin", { title: "ADMIN PANEL", posts: result })
    )
    .catch((err) => console.log(err));
});
// ADMIN page -- POST

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});

// start server is moved to mongoDB promice
