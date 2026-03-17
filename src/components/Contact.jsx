import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

<FaMapMarkerAlt />


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
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>
            <span className="lang-content active" data-lang="en">
              Start Your Career Journey Today
            </span>
            <span className="lang-content" data-lang="te">
              మీ Career Journey ఇప్పుడే Start చేయండి
            </span>
          </h2>

          <p style={{ marginBottom: "40px" }}>
            <span className="lang-content active" data-lang="en">
              Attend a free demo class. Clear your doubts. Then decide.
            </span>
            <span className="lang-content" data-lang="te">
              Free demo class attend చేయండి. మీ doubts clear చేసుకోండి. Then
              decide.
            </span>
          </p>

          <div className="info-item">
            <div className="info-icon">
              <i className="fa fa-map-marker"><FaMapMarkerAlt /></i>
            </div>
            <div>
              <h4>
                <span className="lang-content active" data-lang="en">
                  Our Location
                </span>
                <span className="lang-content" data-lang="te">
                  మా స్థానం
                </span>
              </h4>
              <p>
                Flat No: 202, Vasavi&apos;s Vandanam Apartments, Near CBR
                Estates, Sai Durga Colony, Deepthisri Nagar-Miyapur,
                Hyderabad-500049, Telangana.
              </p>
            </div>
          </div>

          <div className="location-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.226076480508!2d78.33719497421212!3d17.496718199648196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92626c82b313%3A0x9fd00fa45d261e0c!2sVasavi%27s%20Vandanam!5e0!3m2!1sen!2sin!4v1773495931535!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Commerce Maestro Location"
              ></iframe>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <i className="fa fa-phone"> <FaPhone /></i>
            </div>
            <div>
              <h4>
                <span className="lang-content active" data-lang="en">
                  Phone
                </span>
                <span className="lang-content" data-lang="te">
                  ఫోన్
                </span>
              </h4>
              <p>
                <a
                  href="tel:+919281423468"
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  +91 9281423468
                </a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
<div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
  <FaEnvelope style={{ color: "white", fontSize: "25px" }} />

</div></div>
            <div>
              <h4>
                <span className="lang-content active" data-lang="en">
                  Email
                </span>
                <span className="lang-content" data-lang="te">
                  ఇమెయిల్
                </span>
              </h4>
              <p>
                <a
                  href="mailto:tally.commercemaestro@gmail.com"
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  tally.commercemaestro@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
  <FaClock style={{ color: "white", fontSize: "25px" }} /></div>
            <div>
             
  

              <h4>
                <span className="lang-content active" data-lang="en">
                  Timings
                </span>
                <span className="lang-content" data-lang="te">
                  సమయాలు
                </span>
              </h4>
              <p>
                <span className="lang-content active" data-lang="en">
                  Mon-Sat: 10:00 AM - 8:00 PM
                </span>
                <span className="lang-content" data-lang="te">
                  సోమ-శని: 10:00 AM - 8:00 PM
                </span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-form" style={{ alignItems: "center" }}>
            <h3 style={{ marginBottom: "30px" }}>
              <span className="lang-content active" data-lang="en">
                Get Free Demo
              </span>
              <span className="lang-content" data-lang="te">
                ఫ్రీ డెమో పొందండి
              </span>
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  pattern="[A-Za-z ]+"
                  title="Please enter only letters (A-Z)"
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
                  maxLength="10"
                  title="Please enter a valid 10 digit mobile number"
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
                  <option value="">Select your interest</option>
                  <option value="training">AI-Powered Accounting Training</option>
                  <option value="dsc">Digital Signature Services</option>
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
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit & Get Free Demo →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;