import cors from "cors";
import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(express.json());

const mysqlConfig = {
  host: "db-mysql-fra1-43004-do-user-9588716-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "iqlsoxkdib4jrhx3",
  database: "ecommerce",
  port: "25060",
};

app.get("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    con.execute(`SELECT * FROM products`).then((response) => {
      console.log(response);
      res.json(response[0]);
    });
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
app.get("/order/:id", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const id = req.params.id;
    con
      .execute(
        `SELECT * FROM orders INNER JOIN products ON orders.product_id=products.id WHERE orders.order_id='${id}' `
      )
      .then((response) => {
        console.log(response);
        res.json(response[0]);
      });
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
app.post("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const dataFromREST = req.body;
    console.log(dataFromREST);
    con.execute(
      `INSERT INTO products (title, image, price) VALUES ('${dataFromREST.title}','${dataFromREST.image}','${dataFromREST.price}')`
    );
    //.then((response) => {
    //   console.log(response);
    //   res.json(response);
    // });
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

//Starting server
app.listen(`5000`, () => console.log(`working`));
