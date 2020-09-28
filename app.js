const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mySqlConnection = require("./connection");
const Products = require("./products");
const port = 8085;

const data = require("./data/database");

app.use(bodyParser.json());

app.get("/productss", (req, res) => {
  res.json(data);
});

app.use("/products", Products);

app.get("/product/:id", (req, res) => {
  console.log(req);
  res.json(data.default.filter((x) => x.id == req.params.id)[0]);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
