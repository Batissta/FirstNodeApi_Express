const express = require("express");
const app = express();
const ProductsRouter = require("./src/routes/ProductsRouter");
const ClientesRouter = require("./src/routes/ClientesRouter");
app.use(express.json());
app.use(ProductsRouter);
app.use(ClientesRouter);
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log("our server is running at port " + process.env.PORT);
});
