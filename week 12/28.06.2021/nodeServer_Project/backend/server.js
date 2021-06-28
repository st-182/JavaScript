const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer(function (req, res) {
  //   console.log(req.url);
  //   res.setHeader("Content-Type", "text/html");
  //   res.write(`
  //   <header>
  //     <ul>
  //         <li><a href="#">Home</a></li>
  //         <li><a href="#">News</a></li>
  //         <li><a href="#">Contact</a></li>
  //         <li><a href="#">About</a></li>
  //     </ul>
  // </header>
  //   `);
  res.setHeader("Content-Type", "text/html");
  //   res.setHeader("Content-Type", "text/css");
  let path = ``;
  switch (req.url) {
    case "/":
      path = "./views/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = "./views/about.html";
      res.statusCode = 200;
      break;
    default:
      path = "./views/404.html";
      res.statusCode = 200;
      break;
  }

  fs.readFile(path, (error, data) => {
    return res.end(data);
  });

  //   res.end();
});
server.listen(port, function (error) {
  if (error) {
    console.log("Something wromg", error);
  } else {
    console.log("server is listnening ", port);
  }
});
console.log(`hello, world!`);

// const os = require("os");
// const path = require("path");
// const fs = require("fs");
// // console.log(os);
// console.log(path.dirname("/"));
// fs.readFile("./text.txt", (err, data) => {
//   console.log(data.toString());
// });
