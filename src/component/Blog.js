import React from "react";
import "./app.css";
import { GoArrowRight } from "react-icons/go";

const blogs = [
  {
    img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-thisisengineering-3862132-370x260.jpg",
    date: "Jun 01, 2024",
    category: "Technology",
    title: "Professional Mobile Painting and Sculpting",
  },
  {
    img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/pexels-thisisengineering-3861972-370x260.jpg",
    date: "May 29, 2024",
    category: "Programming",
    title: "Professional Ceramic Moulding for Beginner",
  },
  {
    img: null,
    date: "May 20, 2024",
    category: "Design",
    title: "Creative UI/UX Design Trends 2024",
  },
  {
    img: null,
    date: "May 10, 2024",
    category: "AI",
    title: "How AI Is Changing Web Development",
  },
];

export default function Blog() {
  return (
    <section className="blog_area">
      <div className="blog_grid">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`single_blog 
              ${index === 2 ? "large third" : ""} 
              ${index === 3 ? "large fourth" : ""}`}
          >
            {blog.img && <img src={blog.img} alt={blog.title} />}
            <div className="content_box">
              <span>
                {blog.date} | <a href="#cat">{blog.category}</a>
              </span>
              <h2>{blog.title}</h2>
                   <a href="#btn" className="explore-btn">
                        
                            Read more <GoArrowRight />
                          </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
