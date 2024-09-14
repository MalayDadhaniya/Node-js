const mongoose = require("mongoose");

uri = "mongodb+srv://MalayAPI:Malaypatel2005@cluster0.anhoe.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;