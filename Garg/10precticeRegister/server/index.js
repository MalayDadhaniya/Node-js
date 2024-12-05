const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/User.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/try");

app.post("/register", (req, res) => {
  userModel
    .create(req.body)
    // .then((registeruser) => res.json(registeruser))
    .catch((err) => console.log(err));
});

app.listen(9000, () => console.log("Server Started"));
