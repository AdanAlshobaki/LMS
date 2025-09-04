import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import "./app.css";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="vid_area">
      <div className="video-area">
        <button className="video-button" onClick={() => setIsOpen(true)}>
         <i> <FaPlay /></i>
        </button>
      </div>

      {isOpen && (
        <div className="video-overlay" onClick={() => setIsOpen(false)}>
          <div className="video-popup" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0KYxN1kJSb0?autoplay=1"
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
