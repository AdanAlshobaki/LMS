import React from "react";
import "./app.css";

const features = [
  {
    title: "Quality Education",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    title: "Experienced Teachers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    title: "Delicious Food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="features-grid">
        {features.map((item, i) => (
          <div className="feature-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#btn" className="explore-btn">
          
              EXPLORE COURSES  →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
