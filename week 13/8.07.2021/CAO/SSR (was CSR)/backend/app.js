//import of modules
const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);
const Car = require(`./models/car`);
require(`dotenv`).config();

//var
const app = express();
const PORT = process.env.port;

//Connection to online data base - mongoDB
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log(`connected to db`);
    //Start server
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: `http://127.0.0.1:5500`,
  })
);

//Controllers
const getCars = require(`./controllers/getCars`);
const getCar = require(`./controllers/getCar`);
const postCar = require(`./controllers/postCar`);
const putCar = require(`./controllers/putCar`);
const deleteCar = require(`./controllers/deleteCar`);

//Routes
//get
app.get(`/api/cars`, getCars);
app.get(`/api/cars/:id`, getCar);

//post
app.post(`/api/cars`, postCar);

//put
app.put(`/api/cars/:id`, putCar);

//delete
app.delete(`/api/cars/:id`, deleteCar);
