const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/contact", async (req, res) => {
  try {
    console.log("Data received:", req.body); // DEBUG

    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(200).json({ message: "Data saved successfully ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving data ❌" });
  }
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});