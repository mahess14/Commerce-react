const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "*", // later you can restrict to Netlify URL
}));

// MongoDB Connection
mongoose.connect("YOUR_MONGO_URI")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form" });
  }
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));