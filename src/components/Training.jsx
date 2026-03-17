import React from "react";
import { FaDownload } from "react-icons/fa";


function Training() {

  const downloadBrochure1 = () => {
    window.open("/brochures/TallyEssential Course_Brochure.pdf", "_blank");
  };

  const downloadBrochure2 = () => {
    window.open("/brochures/TallyProfessional Course_Brochure.pdf", "_blank");
  };

  const downloadBrochure3 = () => {
    window.open("/brochures/Master Accountant using Tally_Brochure.pdf", "_blank");
  };

  return (
    <section className="training" id="training">

      <div className="training-container">

        {/* LEFT CONTENT */}

        <div className="training-content">

          <h2>
            <span className="lang-content active" data-lang="en">
              Why Choose Commerce Maestro?
            </span>

            <span className="lang-content" data-lang="te">
              AI-పవర్డ్ అకౌంటింగ్ ప్రొఫెషనల్ సర్టిఫికేట్
            </span>
          </h2>

          <p>
            <span className="lang-content active" data-lang="en">
              India's first AI-integrated accounting course. Not traditional Tally training - this is a complete program specially designed for the 2026 job market.
            </span>

            <span className="lang-content" data-lang="te">
              ఇండియా లో మొదటి AI-integrated accounting course.
            </span>
          </p>


          <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              TallyPrime complete mastery with real company data
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              GST filing &amp; Income Tax Returns (practical hands-on)
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              ChatGPT &amp; Claude AI for accounting queries &amp; automation
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              AI Accountant, Suvit AI tools
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              Excel automation &amp; Power Query
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              5 real company projects
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              Resume building &amp; placement support
            </li>

            <li style={{ padding: "10px 0", paddingLeft: "30px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#ff8c00", fontWeight: "bold" }}>✓</span>
              Certificate + Lifetime access
            </li>

          </ul>

        </div>


        {/* RIGHT OFFER BOX */}

        <div className="training-highlight">

          <div className="price">
            <span className="lang-content active" data-lang="en">
              Only ₹12,000
            </span>

            <span className="lang-content" data-lang="te">
              ₹12,000 మాత్రమే
            </span>
          </div>

          <h3 style={{ marginBottom: "20px" }}>
            <span className="lang-content active" data-lang="en">
              Special Limited Time Offer
            </span>

            <span className="lang-content" data-lang="te">
              స్పెషల్ లిమిటెడ్ టైమ్ ఆఫర్
            </span>
          </h3>

          <p>✓ Complete AI-powered training</p>
          <p>✓ Job placement assistance</p>
          <p>✓ Lifetime access to materials</p>
          <p>✓ Industry-recognized certificate</p>
          <p>✓ 5 Real company projects</p>
          <p>✓ 3 months post-training support</p>

        </div>

      </div>


      {/* COURSES */}

      <div className="training-highlights">

        <div className="Courses">
          <span className="lang-content active" data-lang="en">
            Courses
          </span>

          <span className="lang-content" data-lang="te">
            కోర్సులు
          </span>
        </div>


<div className="hero-buttons">
<button
  className="btn btn-secondary"
  onClick={downloadBrochure1}
  style={{  alignItems: "center", gap: "10px",lineHeight:"20px" }}
>

 <FaDownload /> <br></br> Download <br></br>TallyEssential Brochure 
</button>
<br /><br />
<button
  className="btn btn-secondary"
  onClick={downloadBrochure2}
  style={{  alignItems: "center", gap: "10px",lineHeight:"20px"  }}
>
 
 <FaDownload /> <br></br> Download <br></br>TallyProfessional Brochure 
</button>
<br /><br />
<button
  className="btn btn-secondary"
  onClick={downloadBrochure3}
  style={{  alignItems: "center", gap: "10px",lineHeight:"20px"  }}
>
 
 <FaDownload /> <br></br> Download <br></br> Master Accountant Brochure 
</button>
</div>
</div>


      {/* CTA BUTTONS */}

      <div style={{ marginTop: "40px" }}>

        <a href="#contact" className="btn btn-primary">
          <span className="lang-content active" data-lang="en">
            Enroll Now - Next Batch
          </span>

          <span className="lang-content" data-lang="te">
            ఇప్పుడే ఎన్‌రోల్ అవ్వండి
          </span>
        </a>

        <a
          href="tel:+919281423468"
          className="btn btn-secondary"
          style={{ marginLeft: "20px" }}
        >
          Call Us Now
        </a>

      </div>

    </section>
  );
}

export default Training;