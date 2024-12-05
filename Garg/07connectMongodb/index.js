const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/try")
  .then(() => console.log("mongodb Connected"))
  .catch((err) => console.log("mongo Error : ", err));

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

app.listen(8000, () => console.log("Server Started!"));
