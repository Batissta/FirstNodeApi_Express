const express = require("express");
const {
  findAll,
  findOne,
  insertOne,
  updateOne,
} = require("../controllers/ClientsController");
const router = express.Router();

router
  .route("/clients")
  .get((req, res) => findAll(req, res))
  .post((req, res) => insertOne(req, res));

router
  .route("/clients/:id")
  .get((req, res) => findOne(req, res))
  .put((req, res) => updateOne(req, res));

module.exports = router;
