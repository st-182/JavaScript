console.log(`one`);
const express = require("express");
const cors = require("cors");
const app = express();

console.log(__dirname);
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/data.json");
  // res.send({
  //   brands: ["BMW", "VW", "Porsche"],
  // });
});
app.listen(8080, () => console.log("The server is running on port 8080"));
