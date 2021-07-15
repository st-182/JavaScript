const mongoose = require("mongoose");
const dotenv = require(`dotenv`);
const colors = require(`colors`);

const Post = require("./models/barModel");

dotenv.config();

let bars = [
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Vilnius-Old-Town.jpg",
    title: "Wander around Vilnius Old Town",
    address: "Vilnius Old Town",
    price_rating: "0",
    overall_rating: "5",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Trakai-Castle-.jpg",
    title: "Take a trip to Trakai",
    address: "Trakai Castle",
    price_rating: "2",
    overall_rating: "5",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Devil%E2%80%99s-Museum.jpg",
    title: "Brave the Devil’s Museum",
    address: "Trakai Castle",
    price_rating: "2",
    overall_rating: "5",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/St.-Anne%E2%80%99s-Church.jpg",
    title: "Visit St. Anne’s Church",
    address: "St. Anne’s Church in Vilnius",
    price_rating: "1",
    overall_rating: "4",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Curonian-Spit-Kursiu-Nerija-National-Park.jpg",
    title: "Explore the Curonian Spit & Kursiu Nerija National Park",
    address: "Curonian Spit &Kursiu Nerija National Park near Klaipeda",
    price_rating: "1",
    overall_rating: "5",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Siauliai-Hill-of-Crosses.jpg",
    title: "Wonder at the Siauliai Hill of Crosses",
    address: "Siauliai Hill Of Crosses near Siauliai",
    price_rating: "0",
    overall_rating: "4",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Money-Museum.jpg",
    title: "Visit the Money Museum",
    address:
      "Money Museum is aptly located on the former site of the Bank of Lithuania",
    price_rating: "2",
    overall_rating: "4",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Gate-of-Dawn.jpg",
    title: "Journey to the Gate of Dawn",
    address:
      "The Gate of Dawn is part of the original walls of defense of Vilnius",
    price_rating: "0",
    overall_rating: "3",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Ginuciai-Water-Mill.jpg",
    title: "Visit the Ginuciai Water Mill",
    address: "Ginuciai Water Mill nestled close to Ignalina",
    price_rating: "4",
    overall_rating: "4",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Grutas-Park.jpg",
    title: "Enjoy Grutas Park",
    address: "Grutas Park",
    price_rating: "4",
    overall_rating: "3",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Museum-of-Genocide-Victims.jpg",
    title: "Visit the Museum of Genocide Victims",
    address:
      "The Museum of Genocide Victims sits in the old Gestapo and KGB headquarters in Vilnius",
    price_rating: "1",
    overall_rating: "5",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Aukstaitija-National-Park.jpg",
    title: "Explore Aukstaitija National Park",
    address: "Aukstaitija National Park",
    price_rating: "5",
    overall_rating: "1",
  },
  {
    img_url:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/07/Rumsiskes-Open-Air-Museum.jpg",
    title: "Learn some history at Rumsiskes Open-Air Museum",
    address: "Rumsiskes Open-Air Museum near Kaunas",
    price_rating: "3",
    overall_rating: "3",
  },
];

// //Connecting mongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     console.log(`Connected to MongoDB from seeder`.blue.underline);
//     Post.insertMany(bars);
//   })
//   .catch((err) => console.log(err));
