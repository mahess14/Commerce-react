import React from "react";

function VideoGallery() {
  const videoUrls = [
    {
      title: "Tally Education",
      url: "https://youtube.com/shorts/0Z3D36Mv7_w?feature=share",
    },
    {
      title: "Tally Education",
      url: "https://youtube.com/shorts/cMTJ8gm-QAk?feature=share",
    },
    {
      title: "Tally Prime Software",
      url: "https://youtube.com/shorts/FkmTpKUNRUg?feature=share",
    },
    {
      title: "Why to Choose Tally Education",
      url: "https://youtube.com/shorts/KBm82BXmaSM?feature=share",
    },
    {
      title: "Master Accountant using Tally",
      url: "https://youtube.com/shorts/XzEEFv5hMUY?feature=share",
    },
    {
      title: "Master Accountant using Tally",
      url: "https://youtube.com/shorts/m2tNJRJ1I40?feature=share",
    },
    {
      title: "Tally Certification",
      url: "https://youtube.com/shorts/aSd15LGZnHc?feature=share",
    },
  ];

  return (
    <section className="video-gallery" id="videogallery">
      <h2 className="gallery-title">
        <span className="lang-content active" data-lang="en">
          Video Gallery
        </span>
        <span className="lang-content" data-lang="te">
          వీడియో గ్యాలరీ
        </span>
      </h2>

      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#FCA20D",
          borderRadius: "8px",
          margin: "2rem 0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          {videoUrls.map((video, index) => (
            <li
              key={index}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#F3F5F7",
                padding: "1rem",
                borderRadius: "6px",
              }}
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#091afa",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default VideoGallery;