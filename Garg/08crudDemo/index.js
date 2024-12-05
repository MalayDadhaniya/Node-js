const express = require("express");
const router = require("./routes/Products");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use("/api/product", router);

app.listen(PORT, () => console.log("Server Started !"));
