const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST API
router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({
      message: "Form submitted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error saving data"
    });
  }
});

module.exports = router;