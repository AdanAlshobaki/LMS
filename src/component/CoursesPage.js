import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import ReleaseFilter from "./ReleaseFilter";
import Pagination from "./Pagination";
import CourseCard from "./CourseCard";

const DEMO_COURSES = [
  { id: 1, image: "/assets/icons/course1.jpg", badge: "Business", title: "Financial Security Thinking and Principles Theory", lessons: "6 Lessons", duration: " 4 hours", rating: 4.5, level: "All Levels", price: 265, releaseDate: "2024-08-10" },
  { id: 2, image: "/assets/icons/course2.jpg", badge: "Finance", title: "Increasing Engagement With Instagram & Facebook", lessons: "14 lessons", duration: " 4 hours", rating: 5.0, level: "All Levels", price: 250, releaseDate: "2023-12-01" },
  { id: 3, image: "/assets/icons/course3.jpg", badge: "UI/UX Design", title: "Basic Fundamentals of Interior & Graphics Design", lessons: "16 Lessons", duration: "22 hours 20 minutes", rating: 5.0, level: "Intermediate", price: 0, releaseDate: "2022-10-10" },
  { id: 4, image: "/assets/icons/course4.jpg", badge: "Digital Program", title: "WordPress for Beginners – Master WordPress", lessons: "15 Lessons", duration: "7  hours 30 minutes", rating: 4.33, level: "Beginner", price: 0, releaseDate: "2025-12-30" },
  { id: 5, image: "/assets/icons/course5.jpg", badge: "Data Science", title: "The Complete Python Course for Beginner 2023", lessons: "14 Lessons", duration: "18 hours 20 minutes", rating: 4.0, level: "Intermediate", price: 300, releaseDate: "2021-12-03" },
  { id: 6, image: "/assets/icons/cours6.jpg", badge: "UI/UX Design", title: "Ultimate Photoshop Training: From Beginner", lessons: "14 Lessons", duration: "13 hours 20 minutes", rating: 3.33, level: "AllLevel", price: 0, releaseDate: "2024-10-07" },
  { id: 7, image: "/assets/icons/course7.jpg", badge: "Modern Physics", title: "User Experience Design Essentials Adobe xd UI UX Design", lessons: "15 Lessons", duration: "10 hours 40 minutes", rating: 4.5, level: "Beginner", price: 0, releaseDate: "2025-12-01" },
  { id: 8, image: "/assets/icons/course8.jpg", badge: "Modern Physics", title: "Basic Fundamentals of Interior & Graphics Design", lessons: "16 Lessons", duration: "15 hours 20 minutes", rating: 5.0, level: "Beginner", price: 180, releaseDate: "2020-01-01" },
  { id: 9, image: "/assets/icons/course9.jpg", badge: "Modern Physics", title: "Sales Training: Practical Sales Techniques", lessons: "14 Lessons", duration: "2 hours 20 minutes", rating: 4.0, level: "Expert", price: 265, releaseDate: "2023-05-04" },
  { id: 10, image: "/assets/icons/course10.jpg", badge: "Digital Program", title: "Increasing Engagement With Instagram & Facebook", lessons: 14, duration: "3 hours 20 minutes", rating: 4.5, level: "Intermediate", price: 265, releaseDate: "2024-02-30" },
  { id: 11, image: "/assets/icons/course11.jpg", badge: "Digital Program", title: "Increasing Engagement With Instagram & Facebook", lessons: 14, duration: "3 hours 20 minutes", rating: 4.5, level: "Intermediate", price: 265, releaseDate: "2021-07-07" },
];

export default function CoursePage() {
  const { id } = useParams(); 
  const [courses, setCourses] = useState([]);
  const [sortOption, setSortOption] = useState("newest_first");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  useEffect(() => {
    setCourses(DEMO_COURSES);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortOption]);

  const sortedCourses = useMemo(() => {
    const copy = [...courses];
    if (sortOption === "newest_first") return copy.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    if (sortOption === "oldest_first") return copy.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    if (sortOption === "course_title_az") return copy.sort((a, b) => a.title.localeCompare(b.title));
    if (sortOption === "course_title_za") return copy.sort((a, b) => b.title.localeCompare(a.title));
    return copy;
  }, [courses, sortOption]);


  const filteredCourses = id ? sortedCourses.filter(c => c.id === parseInt(id)) : sortedCourses;

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / perPage));
  const start = (currentPage - 1) * perPage;
  const visible = filteredCourses.slice(start, start + perPage);

  return (
    <section className="courses-page">
      <div className="courses-toolbar">
        <ReleaseFilter value={sortOption} onChange={setSortOption} />
      </div>

      <div className="courses-grid">
        {visible.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>

     
      {!id && (
        <Pagination
          current={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}
