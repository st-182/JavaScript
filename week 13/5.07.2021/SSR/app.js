const express = require(`express`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);

require(`dotenv`).config();
const app = express();

//Middlewares
//-adding ejs template engine to project
app.set(`view engine`, `ejs`);
app.use(express.static(`public`));

//Database
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

//Routes
//-home
app.get(`/`, (req, res) => {
  res.render(`index`, { title: `Home` });
});
//-about
app.get(`/about`, (req, res) => {
  res.render(`about`, { title: `About Me` });
});
//-blog
app.get(`/blog`, (req, res) => {
  res.render(`blog`, { title: `Blog Posts`, posts: posts });
});
//404
app.get(`/blog`, (req, res) => {
  res.status(`404`).render(`404`, { title: `Not Found` });
});

//Starting Server
app.listen(process.env.PORT, () =>
  console.log(`Server is sunning on port ${process.env.PORT}`)
);
