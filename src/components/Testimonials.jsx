import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Naveen Kumar",
    role: "Accounts Executive, GLS Corporate Services",
    avatar: "NK",
    stars: "★★★★★",
    image: "/images/t.jpg",
    textEn:
      "I learned Tally at other institutes but didn't get a job. After learning Accounting at Commerce Maestro, I got a ₹22,000 salary. AI knowledge impressed my employer!",
    textTe:
      "ఇతర institutes లో Tally నేర్చుకున్నా job రాలేదు. Commerce Maestro లో AI tools తెలుసుకున్నాక ₹22,000 salary వచ్చింది. AI knowledge impressed my employer!",
  },
  {
    id: 2,
    name: "Kumar",
    role: "Tax Assistant, CA Firm",
    avatar: "K",
    stars: "★★★★★",
    image: "/images/t1.jpg",
    textEn:
      "ChatGPT saves 70% of my time in daily work. GST queries are solved instantly. My senior thinks I'm very experienced 😊",
    textTe:
      "ChatGPT నా daily work లో 70% time save చేస్తుంది. GST queries instant గా solve అవుతున్నాయి. My senior thinks I'm very experienced 😊",
  },
  {
    id: 3,
    name: "Mahi",
    role: "Freelance Bookkeeper",
    avatar: "M",
    stars: "★★★★★",
    image: "/images/t2.jpg",
    textEn:
      "After learning AI Accountant tool, I started freelancing. Now I earn ₹40,000 monthly. Best decision ever!",
    textTe:
      "AI Accountant tool నేర్చుకున్నాక freelancing start చేశాను. ఇప్పుడు monthly ₹40,000 earn చేస్తున్నా. Best decision ever!",
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">
        <span className="lang-content active" data-lang="en">
          Success Stories
        </span>
        <span className="lang-content" data-lang="te">
          సక్సెస్ స్టోరీస్
        </span>
      </h2>

      <p className="section-subtitle">
        <span className="lang-content active" data-lang="en">
          Real students, real results, real salaries
        </span>
        <span className="lang-content" data-lang="te">
          నిజమైన విద్యార్థులు, నిజమైన ఫలితాలు, నిజమైన జీతాలు
        </span>
      </p>

      <div className="testimonial-carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="testimonial-card">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="testimonial-image"
          />

          <div className="stars">{testimonials[current].stars}</div>

          <p>
            <span className="lang-content active" data-lang="en">
              "{testimonials[current].textEn}"
            </span>
            <span className="lang-content" data-lang="te">
              "{testimonials[current].textTe}"
            </span>
          </p>

          <div className="testimonial-author">
            <div className="author-avatar">{testimonials[current].avatar}</div>
            <div>
              <strong>{testimonials[current].name}</strong>
              <br />
              <span className="author-role">{testimonials[current].role}</span>
            </div>
          </div>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active-dot" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsCarousel;