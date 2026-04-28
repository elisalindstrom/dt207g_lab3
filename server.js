const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Databaskoppling
mongoose.connect("mongodb://localhost:27017/cv").then(() => {
    console.log("Connected to Mongodb");
}).catch((error) => {
    console.log("Error connecting to db:" + error);
})

// Schema
const WorkexperienceSchema = new mongoose.Schema({
    companyname: { type: String, required: [true, "Fyll i företagets namn"] },
    jobtitle: { type: String, required: [true, "Fyll i jobbtitel"] },
    startdate: { type: Date, required: [true, "Fyll i startdatum"] },
    enddate: { type: Date }
})

const Workexperience = mongoose.model("Workexperience", WorkexperienceSchema);

// Routes
app.get("/", (req, res) => {
    res.send("API running");
})

app.get("/workexperience", async (req, res) => {
    try {
        let result = await Workexperience.find({});

        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
})

app.post("/workexperience", async (req, res) => {
    try {
        let result = await Workexperience.create(req.body);

        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
})

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
})