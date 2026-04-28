const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/cv"). then(() => {
    console.log("Connected to Mongodb");
}).catch((error) => {
    console.log("Error connecting to db:" + error);
})