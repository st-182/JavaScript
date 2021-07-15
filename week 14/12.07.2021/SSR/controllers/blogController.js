const Post = require(`../models/postModel`);

// My Blog page
const getAllPosts = (req, res) => {
  // res.render("blog", { title: "My Blog", posts: posts });
  Post.find()
    .then((result) => res.render("blog", { title: "My blog", posts: result }))
    .catch((err) => console.log(err));
};

// -- single post page
const getSinglePost = (req, res) => {
  const id = req.params.id;
  // let post = posts.find((post) => {
  //   return post.id === id;
  // });
  // console.log(post);
  // res.render("post", { title: post.title, post: post });
  Post.findById(id)
    .then((result) => res.render("post", { title: result.title, post: result }))
    .catch((err) => console.log(err));
};

const postSinglePost = (req, res) => {
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
};

const deleteSinglePost = (req, res) => {
  const id = req.params.id;
  // let post = posts.find((post) => {
  //   return post.id === id;
  // });
  // console.log(post);
  // res.render("post", { title: post.title, post: post });
  Post.findByIdAndDelete(id)
    .then((result) => res.json({ message: "post deleted" }))
    .catch((err) => console.log(err));
};
module.exports = {
  getAllPosts,
  getSinglePost,
  postSinglePost,
  deleteSinglePost,
};
