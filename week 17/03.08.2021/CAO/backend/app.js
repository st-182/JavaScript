import cors from "cors";
import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());

const mysqlConfig = {
  host: "db-mysql-fra1-43004-do-user-9588716-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "iqlsoxkdib4jrhx3",
  database: "ecommerce",
  port: "25060",
};

app.get("/", async (req, res) => {
  try {
    // Bandom prisijungti prie duomenų bazės
    const con = await mysql.createConnection(mysqlConfig);
    console.log("Success: " + con);

    
    // Atsijungiam nuo duomenų bazės
    await con.end();
  } catch (e) {
    console.log(e);
  }
  res.json(`working`);
});
app.listen(`5000`, () => console.log(`working`));
