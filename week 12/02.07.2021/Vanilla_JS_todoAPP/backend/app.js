//Funkcionalumas:
// Vartotojas turi turėti galimybę:
//      Įvesti naują Todo;
//      Atnaujinti esamą Todo, paspaudus ant "Update" mygtuko;
//      Panaiknti esamą Todo, paspaudus ant "Delete" mygtuko;
// Papidloma informacija:
//      Visi įvesti Todo's turi būti saugomi backend'e esančiame masyve pavadinimu "todos" ir imami/naujinami/pildomi/panaikinami iš jo

//! Variables
//! ----logic:
let todos = [];

//! Import
const express = require(`express`);
const cors = require(`cors`);

//! Inicialization
const app = express();

//! Request Configuration
app.use(
  cors({
    origin: `http://127.0.0.1:5500`,
  })
);
app.use(express.json());

//! Request: GET, PUT, PUSH, and DELETE, as well as, Routes
//! ----GET:
app.get(`/`, (req, res) => {
  res.json(todos);
});
app.get(`/:id`, (req, res) => {
  console.log(req.params.id);
  res.json(todos[req.params.id - 1]);
});

//! ----POST:
app.post(`/`, (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).res.send(`You have sent wrong data format/type/structure. 
    Have to be:
    {title: "Sample", description: "this is my first message"}`);
    return;
  }
  let newItem = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newItem);
  res.json({
    message: "Added!",
    todo: todos[todos.length - 1],
  });
});

//! ----PUT:
app.put(`/:id`, (req, res) => {
  todos[req.params.id - 1].title = req.body.title;
  todos[req.params.id - 1].description = req.body.description;
  res.json({
    message: `Updated`,
    todo: todos[req.params.id - 1],
  });
});

//! ----DELETE:
app.delete(`/:id`, (req, res) => {
  //   todos[req.params.id - 1] = ``;
  let newtodos = todos.reduce((total, currentItem) => {
    if (currentItem.id !== +req.params.id) total.push(currentItem);
    return total;
  }, []);
  todos.length = 0;
  todos.push(...newtodos);

  res.json({
    message: "Todo deleted!",
    todo: todos,
  });
});

//! Starting Server:
app.listen(5000, () => console.log(`Server is running, port 5000`));
