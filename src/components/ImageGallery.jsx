import React from "react";

function ImageGallery() {
  return (
    <section className="image-gallery">

      <h2 className="section-title">
        <span className="lang-content active" data-lang="en">
          Learning Environment
        </span>
        <span className="lang-content" data-lang="te">
          అభ్యసన వాతావరణం
        </span>
      </h2>

      <p className="section-subtitle">
        <span className="lang-content active" data-lang="en">
          See where transformation happens
        </span>
        <span className="lang-content" data-lang="te">
          మార్పు ఎక్కడ జరుగుతుందో చూడండి
        </span>
      </p>

      <div className="gallery-grid">

        <div className="gallery-item">
          <img
            src="/images/class1.jpg"
            alt="Modern Accounting Training Classroom with Computers"
          />

          <div className="gallery-caption">
            <h4>
              <span className="lang-content active" data-lang="en">
                State-of-the-Art Classroom
              </span>
              <span className="lang-content" data-lang="te">
                అత్యాధునిక తరగతి గది
              </span>
            </h4>
          </div>
        </div>


        <div className="gallery-item">
          <img
            src="/images/Hands.png"
            alt="Students Learning TallyPrime GST"
          />

          <div className="gallery-caption">
            <h4>
              <span className="lang-content active" data-lang="en">
                Hands-on Training Sessions
              </span>
              <span className="lang-content" data-lang="te">
                ప్రాక్టికల్ ట్రైనింగ్ సెషన్లు
              </span>
            </h4>
          </div>
        </div>


        <div className="gallery-item">
          <img
            src="/images/AI2.jpg"
            alt="AI Tools Training ChatGPT for Accounting"
          />

          <div className="gallery-caption">
            <h4>
              <span className="lang-content active" data-lang="en">
                AI Tools Integration
              </span>
              <span className="lang-content" data-lang="te">
                AI టూల్స్ ఇంటిగ్రేషన్
              </span>
            </h4>
          </div>
        </div>


        <div className="gallery-item">
          <img
            src="/images/Placement1.jpg"
            alt="Success Celebration Job Placement"
          />

          <div className="gallery-caption">
            <h4>
              <span className="lang-content active" data-lang="en">
                Placement Success Stories
              </span>
              <span className="lang-content" data-lang="te">
                ప్లేస్‌మెంట్ సక్సెస్ స్టోరీస్
              </span>
            </h4>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ImageGallery;