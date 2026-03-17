const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newContact = new Contact({
      name,
      phone,
      email,
      service,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Data saved successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;