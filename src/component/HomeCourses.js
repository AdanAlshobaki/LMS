import { Link } from "react-router-dom";
import { FaBook, FaClock, FaSignal } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useRef, useEffect, useState } from "react";
import "./app.css";

export const DEMO_COURSES = [
  { id: 1, title: "Financial Security Thinking and Principles Theory", image: "/assets/icons/course1.jpg", lessons: "6 Lessons", duration: "4 hours", rating: 4.5, level: "All Levels", price: 265, badge: "Business" },
  { id: 2, title: "Professional Ceramic Moulding for Beginners", image: "/assets/icons/course2.jpg", lessons: "14 Lessons", duration: "3 hours", rating: 5.0, level: "All Levels", price: 250, badge: "Finance" },
  { id: 3, title: "Basic Fundamentals of Interior & Graphics Design", image: "/assets/icons/course3.jpg", lessons: "16 Lessons", duration: "22 hours 20 minutes", rating: 5.0, level: "Intermediate", price: 0, badge: "UI/UX Design" },
  { id: 4, title: "WordPress for Beginners – Master WordPress", image: "/assets/icons/course4.jpg", lessons: "15 Lessons", duration: "7 hours 30 minutes", rating: 4.33, level: "Beginner", price: 0, badge: "Digital Program" },
  { id: 5, title:"The Complete Python Course for Beginner 2023", image: "/assets/icons/course5.jpg", badge: "Data Science", lessons: "14 Lessons", duration: "18 hours 20 minutes", rating: 4.0, level: "Intermediate", price: 300 },
  { id: 6, title:"Ultimate Photoshop Training: From Beginner", image: "/assets/icons/cours6.jpg", badge: "UI/UX Design",  lessons: "14 Lessons", duration: "13 hours 20 minutes", rating: 3.33, level: "AllLevel", price: 0 },
];

export default function HomeCourses() {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState({});

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
        }
      });
    },
    { threshold: 0.2 }
  );

  cardRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => {
    cardRefs.current.forEach((el) => {
      if (el) observer.unobserve(el);
    });
  };
}, []);


  return (
    <section className="home-courses">
      <div className="courses-grid">
        {DEMO_COURSES.map((course, index) => (
          <div
            key={course.id}
            data-id={course.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`course-card ${visibleCards[course.id] ? "animate-card" : ""}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="course-image">
              <span className="course-price">
                {course.price === 0 ? "FREE" : `$${course.price}`}
              </span>
              <img src={course.image} alt={course.title} />
              <div className="course-icons">
                <span title="Lessons"><FaBook /> {course.lessons}</span>
                <span title="Duration"><FaClock /> {course.duration}</span>
                <span title="Rating"><CiStar /> {course.rating}</span>
                <span title="Level"><FaSignal /> {course.level}</span>
              </div>
            </div>
            <div className="course-content">
              {course.badge && (
                <Link to={`/courses/${course.id}`} className="course-badge-link">
                  <span className="course-badge">{course.badge}</span>
                  <h3>{course.title}</h3>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container">
        <a className="btn-One" href="#view all courses">View All Courses</a>
      </div>
    </section>
  );
}
