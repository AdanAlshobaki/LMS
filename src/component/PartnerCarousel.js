import React, { useEffect, useRef } from "react";
import "./app.css";

const logos = [
  "/assets/icons/1.png",
  "/assets/icons/2.png",
  "/assets/icons/3.png",
  "/assets/icons/4.png",
  "/assets/icons/5.png",
  "/assets/icons/1.png",
  "/assets/icons/2.png",
  "/assets/icons/3.png",
  "/assets/icons/4.png",
  "/assets/icons/5.png",
   "/assets/icons/1.png",
  "/assets/icons/2.png",
  "/assets/icons/3.png",
  "/assets/icons/4.png",
  "/assets/icons/5.png",
];

export default function PartnerLogos() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let direction = 1;
    let position = 0;
    const maxOffset = 20;

    const interval = setInterval(() => {
      position += direction;
      if (position > maxOffset || position < -maxOffset) {
        direction *= -1;
      }
      container.style.transform = `translateX(${position}px)`;
    }, 800); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partner-section">
      <div className="partner-title">
        <h3>Trusted Companies Around The World!</h3>
      </div>
      <div className="logo-container" ref={containerRef}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </div>
    </div>
  );
}
