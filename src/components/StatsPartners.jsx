import React from "react";

function StatsPartners() {
  return (
    <div>

      {/* Stats Section */}

      <section className="stats">

        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">
            <span className="lang-content active" data-lang="en">
              Years of Excellence
            </span>
            <span className="lang-content" data-lang="te">
              సంవత్సరాల అనుభవం
            </span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">
            <span className="lang-content active" data-lang="en">
              Happy Students
            </span>
            <span className="lang-content" data-lang="te">
              సంతృప్తి విద్యార్థులు
            </span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-number">90%</div>
          <div className="stat-label">
            <span className="lang-content active" data-lang="en">
              Placement Success
            </span>
            <span className="lang-content" data-lang="te">
              ప్లేస్‌మెంట్ విజయం
            </span>
          </div>
        </div>

      </section>


      {/* Partners Section */}

      <section className="partners">

        <h2 className="section-title">
          <span className="lang-content active" data-lang="en">
            Our Official Partners
          </span>
          <span className="lang-content" data-lang="te">
            మా అధికారిక భాగస్వాములు
          </span>
        </h2>

        <div className="partners-grid">

          <div className="partner-badge">
            <h4>
              <img
                src="/images/handshake1.png"
                alt="Tally Associate Partner"
                className="partner-icon"
                height="80"
              />

              <span className="lang-content active" data-lang="en">
                Tally Associate Partner
              </span>

              <span className="lang-content" data-lang="te">
                టాలీ అసోసియేట్ పార్ట్‌నర్
              </span>
            </h4>

            <p>TallyPrime</p>
          </div>


          <div className="partner-badge">
            <h4>
              <img
                src="/images/handshake1.png"
                alt="Channel Partner"
                className="partner-icon"
                height="80"
              />

              <span className="lang-content active" data-lang="en">
                Channel Partner
              </span>

              <span className="lang-content" data-lang="te">
                ఛానల్ పార్ట్‌నర్
              </span>
            </h4>

            <p>Vyapar</p>
          </div>


          <div className="partner-badge">
            <h4>
              <img
                src="/images/handshake1.png"
                alt="Channel Partner"
                className="partner-icon"
                height="80"
              />

              <span className="lang-content active" data-lang="en">
                Channel Partner
              </span>

              <span className="lang-content" data-lang="te">
                ఛానల్ పార్ట్‌నర్
              </span>
            </h4>

            <p>KDK Software</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default StatsPartners;