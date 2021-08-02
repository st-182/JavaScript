const express = require(`express`);
const mysql = require(`mysql`);
const cors = require(`cors`);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myfirstdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected, error:", err, ".");
});

let app = express();

// -- middlewares
app.use(cors());
app.use(express.json());

// POST
app.post(`/api/cars`, (req, res) => {
  let car = req.body;
  //   console.log(car);
  let query = connection.query("INSERT INTO cars SET ?", car, () => {
    console.log("Car added");
    console.log(car);
    res.send("Car added");
  });
});
//add to a new collection
app.post(`/api/ones`, (req, res) => {
  let one = req.body;
  //   console.log(one);
  let query = connection.query("INSERT INTO ones SET ?", one, () => {
    console.log("one added");
    console.log(one);
    res.send("one added");
  });
});
// -- create table
app.post("/api/admin/createtable", (req, res) => {
  const tableName = req.body.tableName;
  connection.query(
    `CREATE TABLE ${tableName}(ID int AUTO_INCREMENT, make VARCHAR(255), model VARCHAR(255), PRIMARY KEY (ID))`,
    () => {
      console.log(`${tableName} table created...`);
    }
  );
  res.json(tableName);
});

app.get("/api/cars", (req, res) => {
  connection.query(`SELECT * FROM cars`, (err, data) => {
    res.json(data);
    console.log(err);
  });
});

app.get("/api/ones", (req, res) => {
  connection.query(`SELECT * FROM ones`, (err, data) => {
    res.json(data);
    console.log(err);
  });
});

app.get("/api/ones/:id", (req, res) => {
  let id = req.params.id;
  //   console.log(id);
  connection.query(`SELECT * FROM ones WHERE ID=${id}`, (err, data) => {
    res.json(data);
    console.log(err);
  });
});

//Update one from ones
app.put("/api/ones/:id", (req, res) => {
  let id = req.params.id;
  let row = req.body;
  // console.log(id, row);
  connection.query(
    `UPDATE ones SET ${row.name} = '${row.content}' WHERE ID = ${id};`,
    (err, data) => {
      res.json(data);
      console.log(err);
    }
  );
});

//delete one from ones
app.delete("/api/ones/:id", (req, res) => {
  let id = req.params.id;
  //   console.log(id);
  connection.query(`DELETE FROM ones WHERE ID=${id}`, (err, data) => {
    res.json(data);
    console.log(err);
  });
});

app.listen(5000, () => {
  console.log(`working`);
});
