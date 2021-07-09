const express = require(`express`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);

require(`dotenv`).config();
const app = express();

//Middlewares
//-adding ejs template engine to project
app.set(`wiev engine`, `ejs`);

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
//-get
app.get(`/`, (req, res) => {
  //   res.sendFile(`./views/index.html`, { root: __dirname });
  res.sendFile(__dirname + "/views/index.html");
});
app.get(`/about`, (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get(`/blog`, (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

//Starting Server
app.listen(process.env.PORT, () =>
  console.log(`Server is sunning on port ${process.env.PORT}`)
);
