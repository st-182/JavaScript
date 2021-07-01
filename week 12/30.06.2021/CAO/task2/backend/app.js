const express = require("express");
const cors = require("cors");
const app = express();

let users = [];

app.use(express.json());
app.use(cors());

app.get(`/`, (req, res) => {
  res.json(users);
});
app.post(`/`, (req, res) => {
  users.push(req.body);
  res.json("Success");
});

app.listen(5000, () => console.log(`works`));
