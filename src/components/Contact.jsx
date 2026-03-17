import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {

  const API_URL = "http://localhost:5000/api/contact"; 
  // replace with your real backend URL

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      alert(response.data.message || "Form submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });

    } catch (error) {

      console.error("Submit error:", error);
      alert("Server connection error");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="contact-info">

          <h2>Start Your Career Journey Today</h2>

          <p style={{ marginBottom: "40px" }}>
            Attend a free demo class. Clear your doubts. Then decide.
          </p>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Our Location</h4>
              <p>
                Flat No: 202, Vasavi's Vandanam Apartments, Miyapur,
                Hyderabad, Telangana.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>

            <div>
              <h4>Phone</h4>
              <p>
                <a href="tel:+919281423468">+91 9281423468</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:tally.commercemaestro@gmail.com">
                  tally.commercemaestro@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaClock />
            </div>

            <div>
              <h4>Timings</h4>
              <p>Mon-Sat : 10:00 AM - 8:00 PM</p>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <h3 style={{ marginBottom: "30px" }}>
            Get Free Demo
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Service *</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="training">AI Accounting Training</option>
                <option value="dsc">Digital Signature</option>
                <option value="freelance">Freelance Accounting</option>
                <option value="manpower">Accounting Manpower</option>
                <option value="software">Software Sales</option>
                <option value="corporate">Corporate Training</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              {loading ? "Submitting..." : "Submit & Get Free Demo"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;