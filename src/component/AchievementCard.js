import { useRef, useState, useEffect } from "react";
import AchievementCounter from "./AchievementCounter";

export default function AchievementCard({ icon, color, number, text }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
<div ref={ref} className={`count-box ${visible ? "animate" : ""}`}>
  <div className="count-row">
    <div className="count-icon" style={{ color }}>
      {icon}
    </div>
    <div className="count-left">
      <div className="count-number">
        <AchievementCounter number={number} isVisible={visible} />
      </div>
      <div className="count-text">{text}</div>
    </div>
  </div>
</div>


  );
}
