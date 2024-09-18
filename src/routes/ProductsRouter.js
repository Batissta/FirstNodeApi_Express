const express = require("express");
const {
  findAll,
  insertOne,
  findOne,
  updateOne,
} = require("../controllers/ProductsController");

const router = express.Router();

router
  .route("/products")
  .get((req, res) => findAll(req, res))
  .post((req, res) => insertOne(req, res));

router
  .route("/products/:id")
  .get((req, res) => findOne(req, res))
  .put((req, res) => updateOne(req, res));

module.exports = router;
