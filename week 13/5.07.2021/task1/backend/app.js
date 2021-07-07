const express = require(`express`);
const cors = require(`cors`);

const usersWhoReserved = [
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `July`, day: `8`, time: `8:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `January`, day: `1`, time: `8:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `January`, day: `1`, time: `9:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `January`, day: `1`, time: `9:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `8:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `8:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `9:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `9:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `10:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `10:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `11:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `11:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `12:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `12:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `13:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `13:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `14:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `14:30` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `1`, time: `15:00` },
  },
  {
    name: `Jonas`,
    surname: `Petraitis`,
    email: `jonas@gmail.com`,
    phoneNumber: `+37062466677`,
    reservation: { year: `2021`, month: `February`, day: `2`, time: `15:30` },
  },
];

const app = express();

app.use(cors());
app.use(express.json());

app.get(`/`, (req, res) => {
  res.json(usersWhoReserved);
});

app.post(`/`, (req, res) => {
  usersWhoReserved.push(req.body);
  res.json(usersWhoReserved);
});

app.listen(5000, () => console.log(`Server is running`));
