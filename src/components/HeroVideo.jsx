import React from "react";

function HeroVideo() {
  return (
    <section className="video-hero" id="home">
      
      <video autoPlay muted loop playsInline>
        <source src="https://github.com/mahess14/Commerce-react/issues/1#issue-4095564936" type="video/mp4" />
      </video>

      <div className="video-overlay">
        <h1>
          <span className="lang-content active" data-lang="en">
            Transform from Student to Entrepreneur
          </span>

          <span className="lang-content" data-lang="te">
            విద్యార్థి నుండి వ్యవస్థాపకుడిగా మారండి
          </span>
        </h1>

        <p>
          <span className="lang-content active" data-lang="en">
            India's #1 AI-Powered Accounting Training | 90% Placement Guarantee
          </span>

          <span className="lang-content" data-lang="te">
            ఇండియాలో #1 AI-పవర్డ్ అకౌంటింగ్ ట్రైనింగ్ | 90% ప్లేస్‌మెంట్ గ్యారెంటీ
          </span>
        </p>

        <div className="hero-buttons">

          <a href="#training" className="btn btn-primary">
            <span className="lang-content active" data-lang="en">
              Start Your Journey →
            </span>

            <span className="lang-content" data-lang="te">
              మీ ప్రయాణం ప్రారంభించండి →
            </span>
          </a>

          <a href="#contact" className="btn btn-secondary">
            <span className="lang-content active" data-lang="en">
              Book Free Demo
            </span>

            <span className="lang-content" data-lang="te">
              ఫ్రీ డెమో బుక్ చేయండి
            </span>
          </a>

        </div>
      </div>

    </section>
  );
}

export default HeroVideo;
