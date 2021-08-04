import mysql from "mysql2/promise";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();

const parameters = {
  user: `doadmin`,
  password: `iqlsoxkdib4jrhx3`,
  host: `db-mysql-fra1-43004-do-user-9588716-0.b.db.ondigitalocean.com`,
  port: 25060,
  database: `people`,
};

app.use(cors());
app.use(express.json());

app.get(`/`, async (req, res) => {
  const con = await mysql.createConnection(parameters);
  let newName;
  await fetch(`https://randomuser.me/api/`)
    .then((res) => res.json())
    .then((data) => {
      newName = data.results[0].name.first;
    });
  await con.execute(`INSERT INTO names (name) VALUES ('${newName}')`);
  await con.execute(`SELECT * FROM names`).then((response) => {
    // console.log(response[0]);
    res.json(response[0]);
  });
});
app.post(`/`, async (req, res) => {
  const con = await mysql.createConnection(parameters);

  const data = req.body;
  con.execute(`${data.data}`).then((response) => {
    console.log(response[0]);
    res.json(response[0]);
  });
});

app.listen(`5000`, () => console.log(`works`));
