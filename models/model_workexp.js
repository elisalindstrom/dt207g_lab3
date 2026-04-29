const mongoose = require("mongoose");

// Schema
const WorkexperienceSchema = new mongoose.Schema({
    companyname: { type: String, required: [true, "Fyll i companyname"] },
    jobtitle: { type: String, required: [true, "Fyll i jobtitle"] },
    startdate: { type: Date, required: [true, "Fyll i startdate"] },
    enddate: { type: Date }
})

// Model
module.exports = mongoose.model("Workexperience", WorkexperienceSchema);