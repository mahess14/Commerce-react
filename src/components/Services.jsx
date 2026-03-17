import React from "react";

function Services() {
  return (
    <section className="services" id="services">

      <h2 className="section-title">
        <span className="lang-content active" data-lang="en">
          Our Services
        </span>
        <span className="lang-content" data-lang="te">
          మా సేవలు
        </span>
      </h2>

      <p className="section-subtitle">
        <span className="lang-content active" data-lang="en">
          Complete Digital Accounting Solutions - All services in one place
        </span>
        <span className="lang-content" data-lang="te">
          సంపూర్ణ డిజిటల్ అకౌంటింగ్ సొల్యూషన్స్ - ఒక్కే చోట అన్ని సేవలు
        </span>
      </p>

      <div className="services-grid">

        {/* Service 1 */}

        <div className="service-card">
          <div className="service-icon">
            <img src="/images/trn1.png" alt="Training" height="70" />
          </div>

          <h3>
            <span className="lang-content active" data-lang="en">
              AI-Powered Accounting Training
            </span>
            <span className="lang-content" data-lang="te">
              AI-పవర్డ్ అకౌంటింగ్ ట్రైనింగ్
            </span>
          </h3>

          <p>
            <span className="lang-content active" data-lang="en">
              Practical accounting training with modern AI tools. Become job-ready in 6 weeks.
            </span>
            <span className="lang-content" data-lang="te">
              ఆధునిక AI tools తో ప్రాక్టికల్ accounting training. 6 వారాల్లో job-ready అవ్వండి.
            </span>
          </p>

          <ul>
            <li>TallyPrime complete mastery</li>
            <li>Zoho Books &amp; Odoo training</li>
            <li>GST &amp; Income Tax practical</li>
            <li>ChatGPT &amp; AI tools for accounting</li>
            <li>90% placement guarantee</li>
          </ul>
        </div>


        {/* Service 2 */}

        <div className="service-card">
          <div className="service-icon">
            <img src="/images/digital-signature.png" alt="DSC" height="70" />
          </div>

          <h3>
            <span className="lang-content active" data-lang="en">
              Digital Signature Services
            </span>
            <span className="lang-content" data-lang="te">
              డిజిటల్ సిగ్నేచర్ సర్వీసెస్
            </span>
          </h3>

          <p>
            <span className="lang-content active" data-lang="en">
              Class 2 &amp; Class 3 DSC, electronic signing, renewal &amp; support services.
            </span>
            <span className="lang-content" data-lang="te">
              క్లాస్ 2 &amp; క్లాస్ 3 DSC, ఎలెక్ట్రానిక్ సిగ్నింగ్, రీన్యూవల్ &amp; సపోర్ట్ సేవలు.
            </span>
          </p>

          <ul>
            <li>Individual &amp; Organization DSC</li>
            <li>Same day issuance</li>
            <li>GST, Income Tax, MCA filing</li>
            <li>e-Tendering support</li>
          </ul>
        </div>


        {/* Service 3 */}

        <div className="service-card">
          <div className="service-icon">
            <img src="/images/freelance.png" alt="Freelance" height="70" />
          </div>

          <h3>
            <span className="lang-content active" data-lang="en">
              Freelance Accounting Services
            </span>
            <span className="lang-content" data-lang="te">
              ఫ్రీలాన్స్ అకౌంటింగ్ సర్వీసెస్
            </span>
          </h3>

          <p>
            <span className="lang-content active" data-lang="en">
              Complete bookkeeping, GST filing, and financial reporting for SMEs &amp; startups.
            </span>
            <span className="lang-content" data-lang="te">
              SMEs &amp; startups కోసం పూర్తి bookkeeping, GST filing, మరియు financial reporting సేవలు.
            </span>
          </p>

          <ul>
            <li>Monthly bookkeeping</li>
            <li>GST return filing (GSTR-1, 3B)</li>
            <li>TDS computation &amp; filing</li>
            <li>Financial statements preparation</li>
          </ul>
        </div>


        {/* Service 4 */}

        <div className="service-card">
          <div className="service-icon">
            <img src="/images/manpower.png" alt="Manpower" height="70" />
          </div>

          <h3>
            <span className="lang-content active" data-lang="en">
              Accounting Manpower Services
            </span>
            <span className="lang-content" data-lang="te">
              అకౌంటింగ్ మ్యాన్‌పవర్ సర్వీసెస్
            </span>
          </h3>

          <p>
            <span className="lang-content active" data-lang="en">
              Skilled accountants and tax professionals for your business on demand.
            </span>
            <span className="lang-content" data-lang="te">
              మీ వ్యాపారానికి అనుభవజ్ఞులైన accountants మరియు tax professionals.
            </span>
          </p>

          <ul>
            <li>Temporary &amp; permanent staffing</li>
            <li>Tally experts on demand</li>
            <li>GST specialists</li>
            <li>Virtual CFO services</li>
          </ul>
        </div>


        {/* Service 5 */}

        <div className="service-card">
          <div className="service-icon">
            <img src="/images/software.png" alt="Software" height="70" />
          </div>

          <h3>
            <span className="lang-content active" data-lang="en">
              Software Sales &amp; Support
            </span>
            <span className="lang-content" data-lang="te">
              సాఫ్ట్‌వేర్ సేల్స్ &amp; సపోర్ట్
            </span>
          </h3>

          <p>
            <span className="lang-content active" data-lang="en">
              TallyPrime, Vyapar, KDK Software - Official sales, implementation &amp; support.
            </span>
            <span className="lang-content" data-lang="te">
              TallyPrime, Vyapar - అధికారిక sales, implementation &amp; support.
            </span>
          </p>

          <ul>
            <li>Software selection consulting</li>
            <li>Installation &amp; setup</li>
            <li>Data migration from old systems</li>
            <li>Ongoing technical support</li>
          </ul>
        </div>


        {/* Service 6 */}

        <div className="service-card">
          <div className="service-icon">
            <img src="/images/Corporate Training.png" alt="Corporate Training" height="70" />
          </div>

          <h3>
            <span className="lang-content active" data-lang="en">
              Corporate Training
            </span>
            <span className="lang-content" data-lang="te">
              కార్పొరేట్ ట్రైనింగ్
            </span>
          </h3>

          <p>
            <span className="lang-content active" data-lang="en">
              Customized in-house training programs for your team with TallyPrime, GST, AI tools.
            </span>
            <span className="lang-content" data-lang="te">
              మీ team కోసం customized in-house training programs.
            </span>
          </p>

          <ul>
            <li>On-site &amp; online training</li>
            <li>Customized curriculum</li>
            <li>Certification programs</li>
            <li>Post-training support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Services;