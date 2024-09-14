const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi, I am live");
})

// middleware for set routers
app.use("/api/products", products_routes);

const start = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`);
        });
    } catch (error){
        console.log(error);
    }
}

start();