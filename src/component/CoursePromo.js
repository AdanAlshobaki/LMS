
import React, { useEffect, useState } from "react";
import "./app.css";
import { GoArrowRight } from "react-icons/go";


export default function PromoSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const features = [
    "9/10 Average Satisfaction Rate",
    "96% Completion Rate",
    "Friendly Environment & Expert Teacher",
  ];

  return (
    <section className={`course_promo section-padding ${loaded ? "fade-in" : ""}`} style={{ background: "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png)" }}>
      <div className="container promo-flex">
        <div className="promo-text">
          <h4>Best Online Learning Platform</h4>
          <h2>One Platform &amp; Many <span><u>Courses</u></span> For You</h2>
          <p>From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
          <ul>
            {features.map((feature, idx) => (
              <li key={idx}>
                <span className="checkmark">&#10003;</span> {feature}
              </li>
            ))}
          </ul>
          <div className="cp_btn">
             <a href="#btn" className="explore-btn">
                      
                          EXPLORE COURSES  <GoArrowRight />
                        </a>
          </div>
        </div>
        <div className="promo-image">
          <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/about5.png" alt="Best Online Learning Platform" />
        </div>
      </div>
    </section>
  );
}
