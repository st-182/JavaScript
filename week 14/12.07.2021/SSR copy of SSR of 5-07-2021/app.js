const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// Middlewares
app.use(express.static("public"));

// -- adding ejs template engine to project
app.set("view engine", "ejs");

// Database
let posts = [
  {
    id: 1,
    title: `My first SSR web server!`,
    excerpt: `This is absolutely amazing, this server works great and serves my interests online. This sounds great and it is indeed great! I could write lorem ipsum, but what the point? It is much better to write some text like this one!`,
  },
  {
    id: 2,
    title: `I just copy code!`,
    excerpt: `This is absolutely amazing, this aproach works great and serves my interests during lectures. This sounds great and it is indeed great! I could write lorem ipsum, but what the point? It is much better to write some text like this one!`,
  },
];

// Routes
// -- Home page
app.get("/", (req, res) => {
  res.render("index", { title: "Home", posts: posts });
});

// About Me page
app.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

// My Blog page
app.get("/blog", (req, res) => {
  res.render("blog", { title: "My Blog", posts: posts });
});

// -- single post page
app.get("/blog/:id", (req, res) => {
  const id = +req.params.id;
  let post = posts.find((post) => {
    return post.id === id;
  });
  // console.log(post);
  res.render("post", { title: post.title, post: post });
});

// ADMIN page
app.get("/admin", (req, res) => {
  res.render("admin", { title: "ADMIN PANEL", posts: posts });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});

// --- STARTING SERVER ---
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
