import React from "react";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


<FaWhatsapp />


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>
            <span className="lang-content active" data-lang="en">
              Commerce Maestro
            </span>
            <span className="lang-content" data-lang="te">
              కామర్స్ మాస్ట్రో
            </span>
          </h3>
          <p>
            <span className="lang-content active" data-lang="en">
              15+ years of experience as Hyderabad&apos;s leading accounting &amp;
              digital solutions provider. We don&apos;t just give certificates - we
              build careers.
            </span>
            <span className="lang-content" data-lang="te">
              15+ సంవత్సరాల అనుభవంతో హైదరాబాద్ లో leading accounting &amp;
              digital solutions provider. మేము students ని కేవలం certificates
              ఇవ్వము - మేము careers build చేస్తాం.
            </span>
          </p>

{/* Social Media Icons */}
<div className="social-icons">
<a href="https://facebook.com/Commerce Maestro" target="_blank" rel="noopener noreferrer">
    <FaFacebookF style={{ color: "#0c5af7", fontSize: "25px" }} /></a>

<a href="https://instagram.com/commerce_maestro_official" target="_blank" rel="noopener noreferrer">
  <FaInstagram style={{ color: "#E4405F", fontSize: "25px" }} /></a>

  <a href="https://wa.me/919281423468" target="_blank" rel="noopener noreferrer">
 <FaWhatsapp style={{ color: "green", fontSize: "25px" }} /></a>
</div>
</div>

<div className="footer-section">
<h3><span className="lang-content active" data-lang="en"> Quick Links</span>
            <span className="lang-content" data-lang="te">
              శీఘ్ర లింక్‌లు
            </span>
          </h3>
          <ul>
            <li>
              <a href="#home">
                <span className="lang-content active" data-lang="en">
                  Home
                </span>
                <span className="lang-content" data-lang="te">
                  హోమ్
                </span>
              </a>
            </li>

            <li>
              <a href="#services">
                <span className="lang-content active" data-lang="en">
                  Services
                </span>
                <span className="lang-content" data-lang="te">
                  సేవలు
                </span>
              </a>
            </li>

            <li>
              <a href="#training">
                <span className="lang-content active" data-lang="en">
                  Training
                </span>
                <span className="lang-content" data-lang="te">
                  ట్రైనింగ్
                </span>
              </a>
            </li>

            <li>
              <a href="#videogallery">
                <span className="lang-content active" data-lang="en">
                  Video Gallery
                </span>
                <span className="lang-content" data-lang="te">
                  వీడియో గ్యాలరీ
                </span>
              </a>
            </li>

            <li>
              <a href="#testimonials">
                <span className="lang-content active" data-lang="en">
                  Success Stories
                </span>
                <span className="lang-content" data-lang="te">
                  సక్సెస్ స్టోరీస్
                </span>
              </a>
            </li>

            <li>
              <a href="#contact">
                <span className="lang-content active" data-lang="en">
                  Contact
                </span>
                <span className="lang-content" data-lang="te">
                  సంప్రదించండి
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>
            <span className="lang-content active" data-lang="en">
              Our Services
            </span>
            <span className="lang-content" data-lang="te">
              మా సేవలు
            </span>
          </h3>
          <ul>
            <li>
              <a href="#training">
                <span className="lang-content active" data-lang="en">
                  AI Accounting Training
                </span>
                <span className="lang-content" data-lang="te">
                  AI అకౌంటింగ్ ట్రైనింగ్
                </span>
              </a>
            </li>

            <li>
              <a href="#services">
                <span className="lang-content active" data-lang="en">
                  Digital Signature
                </span>
                <span className="lang-content" data-lang="te">
                  డిజిటల్ సిగ్నేచర్
                </span>
              </a>
            </li>

            <li>
              <a href="#services">
                <span className="lang-content active" data-lang="en">
                  Freelance Accounting
                </span>
                <span className="lang-content" data-lang="te">
                  ఫ్రీలాన్స్ అకౌంటింగ్
                </span>
              </a>
            </li>

            <li>
              <a href="#services">
                <span className="lang-content active" data-lang="en">
                  Manpower Services
                </span>
                <span className="lang-content" data-lang="te">
                  మ్యాన్‌పవర్ సర్వీసెస్
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>
            <span className="lang-content active" data-lang="en">
              Support
            </span>
            <span className="lang-content" data-lang="te">
              మద్దతు
            </span>
          </h3>
          <ul>
            <li>
              <a href="#contact">
                <span className="lang-content active" data-lang="en">
                  Free Demo Class
                </span>
                <span className="lang-content" data-lang="te">
                  ఫ్రీ డెమో క్లాస్
                </span>
              </a>
            </li>
<li>
  <a href="/Course_Brochure.pdf" download>
    <span className="lang-content active" data-lang="en">
      Download Brochure
    </span>
    <span className="lang-content" data-lang="te">
      బ్రౌచర్ డౌన్‌లోడ్
    </span>
  </a>
</li>
            <li>
              <a href="tel:+919281423468">
                <span className="lang-content active" data-lang="en">
                  Call Us
                </span>
                <span className="lang-content" data-lang="te">
                  మమ్మల్ని కాల్ చేయండి
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <span className="lang-content active" data-lang="en">
            © 2026 Commerce Maestro. All rights reserved.
          </span>
          <span className="lang-content" data-lang="te">
            © 2026 Commerce Maestro. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;