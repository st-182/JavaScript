const Post = require(`../models/postModel`);
// -- Home page
const homePage = (req, res) => {
  // res.render("index", { title: "Home", posts: posts });
  Post.find()
    .then((result) => res.render("index", { title: "Home", posts: result }))
    .catch((err) => console.log(err));
};

//About Me Page

const aboutMePage = (req, res) => {
  res.render("about", { title: "About Me" });
};

// ADMIN page
const adminPage = (req, res) => {
  // res.render("admin", { title: "ADMIN PANEL", posts: posts });
  Post.find()
    .then((result) =>
      res.render("admin", { title: "ADMIN PANEL", posts: result })
    )
    .catch((err) => console.log(err));
};

module.exports = { homePage, aboutMePage, adminPage };
