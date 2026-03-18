const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ✅ POST API
router.post("/contact", async (req, res) => {
  try {
    console.log("📥 Incoming Data:", req.body);

    // 🔥 CHECK EMPTY BODY
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No data received ❌" });
    }

    const newContact = new Contact(req.body);

    const savedData = await newContact.save();

    console.log("✅ Saved in DB:", savedData);

    res.status(200).json({
      message: "Data saved successfully ✅",
      data: savedData
    });

  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ message: "Server error ❌" });
  }
});

module.exports = router;