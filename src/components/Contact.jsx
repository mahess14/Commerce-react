import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://your-backend.onrender.com/api/contact", // 🔥 IMPORTANT
        formData
      );

      alert("Form submitted successfully");
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="service" placeholder="Service" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;