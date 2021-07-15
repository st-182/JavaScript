const Bar = require(`../models/barModel`);
// -- Home page
const homePage = (req, res) => {
  Bar.find()
    .then((result) =>
      res.render("index", {
        title: "Best Places to visit in Lithuania",
        posts: result,
      })
    )
    .catch((err) => console.log(err));
};

module.exports = { homePage };
