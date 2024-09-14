const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.end("Hello Home Page");
});

app.get("/about", (req, res) => {
    return res.end(`Hello, ${req.query.username}`);
});

app.listen(5000, ()=>console.log("Server Started !"));