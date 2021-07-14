// import of all nessecery modules
const express = require(`express`);
const mongoose = require(`mongoose`);
const colors = require(`colors`);
const dotenv = require(`dotenv`);
const cors = require(`cors`);
const ejs = require(`ejs`);
const Post = require(`./models/postModel`);

// some configuration
dotenv.config();
const app = express();
app.set(`view engine`, `ejs`);

// Middlewares
app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

//connecting to mongoDB with mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(`The mongoDB is connected, my Lord. `.blue.bgYellow);
    console.log(`Waiting for your next command!`.blue);
    app.listen(process.env.PORT, () =>
      console.log(
        `Server has started on port ${process.env.PORT}, my Lord.`.yellow
      )
    );
  });

//Routes
//-home
app.get(`/`, (req, res) => {
  //   Post.find()
  //     .then((responce) => {
  //       res.json(responce);
  //     })
  //     .catch((err) => console.log(err));
  Post.find()
    .then((result) =>
      res.render("index", {
        title: "Delfi | Svarbiausia informacija ",
        posts: result,
      })
    )
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
