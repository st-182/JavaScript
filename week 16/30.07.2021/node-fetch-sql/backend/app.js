const express = require(`express`);
const cors = require(`cors`);
const fetch = require(`node-fetch`);
const mysql = require(`mysql`);

// connection details
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myfirstdb",
});

//connection itself
connection.connect((err) => {
  if (err) throw err;
  console.log("connected, error:", err, ".");
});

const app = express();
//middlewares
app.use(cors());
app.use(express.json());

//Routes
//takes all users from DB and sends it to the frontend
app.get(`/users`, (req, res) => {
  connection.query(`Select * FROM github_users`, (err, data) => {
    res.json(data);
    err ? console.log(err) : null;
  });
});

//creation of table in DB
app.post(`/create/table`, (req, res) => {
  connection.query(
    `CREATE TABLE github_users (id int AUTO_INCREMENT, login VARCHAR(255), img_url VARCHAR(255), PRIMARY KEY (ID))`,
    () => {
      console.log(`table created`);
    }
  );
});

//copy all users to DB
app.post(`/from/github/to/users`, (req, res) => {
  fetch(`https://api.github.com/users`)
    .then((res) => res.json())
    .then((data) => {
      connection.query(`DELETE FROM github_users`, () => {
        data.forEach((user) => {
          connection.query(`INSERT INTO github_users SET ?`, {
            login: user.login,
            img_url: user.avatar_url,
          });
        });
      });
    });
});

// launch server
app.listen(5000, (err) => {
  console.log(`working`);
  err ? console.log(err) : null;
});
