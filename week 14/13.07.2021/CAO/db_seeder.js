const mongoose = require("mongoose");
const dotenv = require(`dotenv`);
const colors = require(`colors`);

const Post = require("./models/postModel");

dotenv.config();

let posts = [
  {
    title:
      " Ministerija: dėl 5 mln. eurų kainavusio pravažiavimo ties Strošiūnais kreiptasi į prokuratūrą",
    excerpt:
      "Magistralėje A1 Vilnius–Kaunas–Klaipėda netoli Elektrėnų įrengto Strošiūnų tunelio statybų aplinkybes tyrę Susisiekimo ministerijos auditoriai nustatė, kad...",
    content:
      "Magistralėje A1 Vilnius–Kaunas–Klaipėda netoli Elektrėnų įrengto Strošiūnų tunelio statybų aplinkybes tyrę Susisiekimo ministerijos auditoriai nustatė, kad 2017 m. suplanuota nedidelė požeminė perėja ir pervaža dėl galimai nepagrįstų sprendimų per porą metų išaugo į didelį infrastruktūros objektą – stambių gabaritų technikai pritaikytą tunelį su jungiamaisiais keliais ir žiedinėmis sankryžomis. Stipriai pabrangus objekto statybai, dėl nustatytų pažeidimų ir galimai padarytos žalos valstybei Susisiekimo ministerija kreipėsi į Generalinę prokuratūrą",
    img_url:
      "https://g2.dcdn.lt/images/pix/880x550/8a2Zo4BCdkY/magistraleje-vilniuskaunas-pozemine-pervaza-ties-strosiunais-87690381.jpg",
  },
  {
    title: "Naujos užtvaros pasienyje su Baltarusija – kodėl jos yra gerai",
    excerpt: "Pasaulis ir jo bėdos yra arčiau nei mums atrodo...",
    content:
      "Pasaulis ir jo bėdos yra arčiau nei mums atrodo. Šiandien skambino draugas, daugiau gyvenantis Norvegijoje, tačiau turintis sodybą Dzūkijoje, keli šimtai metrų nuo Baltarusijos sienos. Grįžęs Lietuvon nulėkė apšienauti savo nuosavybės ir... „Iš miško išeina du, labai labai juodi. Be menkiausio daiktelio, nors kišenėse kažką turi. Paprašė atsigerti, buvo labai mandagūs ir kiek pasimetę. Klausė ar gali išsikviesti taksi iki Vilniaus. Toliau patraukė į mišką. Tiesiog už keliasdešimt sekundžių atlėkė pasieniečių patrulis ir išbarė, kodėl iškart jiems neskambinau. Sakiau, kad tiesiog nespėjau.“",
    img_url:
      "https://g1.dcdn.lt/images/pix/880x550/OU7AB-5zDgs/pasienyje-montuojama-pjaunancios-vielos-tvora-87672953.jpg",
  },
  {
    title:
      "Per Lietuvą bandoma formuoti naują migracijos kelią: pačios kelionės kaina – įspūdinga",
    excerpt:
      "Galiausiai Lietuvoje atsiduriančių migrantų kelionė nėra toks chaotiškas...",
    content:
      "Galiausiai Lietuvoje atsiduriančių migrantų kelionė nėra toks chaotiškas, tik pačių asmenų susigalvotas procesas. Tai yra labai gerai suplanuota, koordinuojama ir jiems brangiai atsieinanti kelionė, kuriame numatytas kiekvienas etapas, rodo Lietuvos turimi duomenys.",
    img_url:
      "https://g4.dcdn.lt/images/pix/880x550/T-3RcObJ2K8/migrantai-is-baltarusijos-kalviuose-87661415.jpg",
  },
  {
    title:
      "Rusija – kontinentinės Kinijos vasalė: viskas vardan to, kad „nepasiduotų Amerikai“",
    excerpt: "Amerikoje kurį laiką „sveriama“, kas...",
    content:
      "Amerikoje kurį laiką „sveriama“, kas – Kinija ar Rusija – grėsmingesnė konkurentė. XXI amžiuje valdo ekonominė argumentacija (kaip kad XX-ame valdė ideologijos), šia prasme Rusija su jos 2 proc. nesiekiančia dalimi pasaulinėje bendrojo vidaus produkto (BVP) struktūroje dėtina į šalį. Kaip žiūrėsi, nė iš tolo neprilygsta 16–17 proc. siekiančiai Kinijos daliai.",
    img_url:
      "https://g4.dcdn.lt/images/pix/880x550/DRhhIodd1zg/delfi-plius-11021-87684339.jpg",
  },
];

//Connecting mongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     console.log(`Connected to MongoDB from seeder`.blue.underline);
//     Post.insertMany(posts);
//   })
//   .catch((err) => console.log(err));
