const mongoose = require("mongoose");

// Databaskoppling
mongoose.connect("mongodb://localhost:27017/cv").then(() => {
    console.log("Connected to Mongodb");
}).catch((error) => {
    console.log("Error connecting to db:" + error);
})

module.exports = mongoose;
