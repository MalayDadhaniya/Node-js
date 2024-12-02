const express = require("express");
const mongoose = require("mongoose");

// Connection..
mongoose
  .connect("mongodb://127.0.0.1:27017/try")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB ERROR : ", err));

// Schema..
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
  },
});

// Model..
const User = mongoose.model("user", userSchema);
