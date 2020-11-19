const express = require('express')
const ProductModel = require("./models/ProductModel")
const bodyParser = require("body-parser")
var cors = require('cors');
const jsonParser = bodyParser.json()

const app = express()

app.use(cors({origin: 'http://localhost:3000'}))

app.get("/product", (req, res) => {
    const { filter } = req.query;
  
    ProductModel.find(filter).then((documents) => {
      res.json(documents);
    });
  });

app.post("/product", jsonParser, (req, res) => {
    const description = req.body;
  
    ProductModel.create(
      description
    ).then((document) => {
      res.json(document);
    });
  });

app.listen(8080, () => {
    console.log("Server started...")
})