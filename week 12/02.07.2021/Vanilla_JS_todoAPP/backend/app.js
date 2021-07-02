//Funkcionalumas:
// Vartotojas turi turėti galimybę:
//      Įvesti naują Todo;
//      Atnaujinti esamą Todo, paspaudus ant "Update" mygtuko;
//      Panaiknti esamą Todo, paspaudus ant "Delete" mygtuko;
// Papidloma informacija:
//      Visi įvesti Todo's turi būti saugomi backend'e esančiame masyve pavadinimu "todos" ir imami/naujinami/pildomi/panaikinami iš jo

//! Variables
//! ----logic:
const todos = [];

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

//! ----PUSH:
app.push(`/`, (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).res.send(`You have sent wrong data format/type/structure. 
    Have to be:
    {title: "Sample", description: "this is my first message"}`);
    return;
  }
  todos.push(res.body);
  res.json({
    message: "Added!",
    todo: todos[todos.length - 1],
  });
});

//! ----PUT:
app.put(`/`, (req, res) => {
  res.json(todos);
});

//! ----DELETE:
app.delete(`/`, (req, res) => {
  res.json(todos);
});
