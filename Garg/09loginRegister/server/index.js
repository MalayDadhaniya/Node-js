const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./model/User.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URL);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Email or Password Incarrect !!!");
        }
      } else {
        res.json("No record Exist !! ");
      }
    })
    .catch((err) => console.log(err));
});

app.post("/register", (req, res) => {
  userModel.create(req.body).catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server Started at PROT : ${PORT}`));
