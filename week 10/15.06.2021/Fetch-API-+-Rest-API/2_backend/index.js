const express = require(`express`);
const app = express();
const cors = require(`cors`);

app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log(`Server is running on port 5000`));

//Adverts DB
let adverts = [
  { id: 1, name: `PS5`, price: 800, phone: `+370 000 00000` },
  { id: 2, name: `PS6`, price: 800, phone: `+370 000 00000` },
  { id: 3, name: `Medion`, price: 200, phone: `+370 000 00000` },
];

// ROUTES (REST API)
// GET
// --get all adverts
app.get(`/adverts`, (req, res) => {
  res.send(adverts);
});
// --get single advert based on id
app.get(`/adverts/:id`, (req, res) => {
  // console.log(req.params);
  res.send(adverts.filter((item) => item.id === +req.params.id));
});
// POST
app.post(`/adverts`, (req, res) => {
  let id = adverts[adverts.length - 1].id + 1;
  adverts.push({ id, ...req.body });
  // adverts.push(req.body);
  res.send({ data: adverts, message: `New adverts added` });
  // res.send(adverts.filter((item) => item.id === +req.params.id));
});
// PUT
app.put(`/adverts/:id`, (req, res) => {
  let updatedAdvert = req.body;
  let advertID = +req.params.id;
  let updatedAdverts = adverts.map((advert) => {
    if (advert.id === advertID) {
      return { ...updatedAdvert };
    } else {
      return advert;
    }
  });
  adverts.length = 0;
  adverts.push(...updatedAdverts);
  res.send({ data: updatedAdverts, message: "Advert updated!" });
  // res.send(adverts.filter((item) => item.id === +req.params.id));
});
// Teorija apie Rest API ir CRUD
app.delete(`/adverts/:id`, (req, res) => {
  let advertID = +req.params.id;
  let updatedAdverts = adverts.reduce((newArr, currentItem) => {
    if (currentItem.id !== advertID) {
      newArr.push(currentItem);
      return newArr;
    }
  }, []);
  adverts.length = 0;
  adverts.push(...updatedAdverts);
  res.send({ data: updatedAdverts, message: "Advert deleted!" });
});
// C - create | method POST
// R - read   | method GET
// U - update | method PUT/PATCH
// D - delete | method DELETE

// Get
