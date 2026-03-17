const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: String,
  service: {
    type: String,
    required: true,
  },
  message: String,
});

module.exports = mongoose.model("Contact", contactSchema);