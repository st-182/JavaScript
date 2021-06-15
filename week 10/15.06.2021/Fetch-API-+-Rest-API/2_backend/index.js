const express = require(`express`);
const app = express();
const cors = require(`cors`);

app.use(cors());
app.listen(5000, () => console.log(`Server is running on port 5000`));

//Adverts DB
let adverts = [
  { id: 1, name: `PS5`, price: 800, phone: `+370 000 00000` },
  { id: 2, name: `PS6`, price: 800, phone: `+370 000 00000` },
];

// ROUTES (REST API)
// GET
app.get(`/adverts`, (req, res) => {
  res.send(adverts);
});

app.get(`/adverts/:id`, (req, res) => {
  console.log(req.params);
  res.send(adverts.filter((item) => item.id === +req.params.id));
});

// Teorija apie Rest API ir CRUD

// C - create | method POST
// R - read   | method GET
// U - update | method PUT/PATCH
// D - delete | method DELETE
