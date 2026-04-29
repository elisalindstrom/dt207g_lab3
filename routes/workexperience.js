const express = require("express");
const router = express.Router();
const Workexperience = require("../models/model_workexp"); // Schema + model

// Routes
router.get("/", async (req, res) => {
    try {
        let result = await Workexperience.find().sort({ startdate: -1 });

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Could not get workexperiences" });
    }
})

// Get med ID
router.get("/:id", async (req, res) => {
    try {
        let result = await Workexperience.findById(req.params.id);

        if (!result) return res.status(404).json({ message: "Workexperience not found" })

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Could not find workexperience" });
    }
})

// Post
router.post("/", async (req, res) => {
    const { companyname, jobtitle, startdate, enddate } = req.body; // Data från request body

    // Validering
    if (!companyname || !jobtitle || !startdate) return res.status(400).json({ message: "Companyname, jobtitle and startdate required" });

    try {
        let result = await Workexperience.create(req.body);

        return res.json(result);
    } catch (error) {
        return res.status(400).json({ message: "Could not create workexperience" });
    }
})

// Delete
router.delete("/:id", async (req, res) => {
    try {
        let result = await Workexperience.findByIdAndDelete(req.params.id);

        // Kontroll om något dokument med rätt ID hittats
        if (!result) return res.status(404).json({ message: "Workexperience not found" })

        return res.json({ result, message: "Deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Workexperience could not be deleted" });
    }
})

// Put
router.put("/:id", async (req, res) => {
    try {
        const result = await Workexperience.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after", runValidators: true });

        if (!result) return res.status(404).json({ message: "Workexperience not found" })

        return res.json({ result, message: "Update successful" })
    } catch (error) {
        return res.status(500).json({ message: "Could not update workexperience" });
    }
})

module.exports = router;