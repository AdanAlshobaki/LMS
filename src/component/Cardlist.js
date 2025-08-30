// import { useState } from "react";
// import CardItem from "./CardItem";

// function CardList() {
//   const [order, setOrder] = useState("newest_first");

//   const cards = [
//     {
//       id: 1,
//       image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg",
//       price: 265,
//       category: { name: "Business", link: "#" },
//       title: "Financial Security Thinking and Principles Theory",
//       lessons: 6,
//       hours: 4,
//       minutes: null,
//       rating: 4.5,
//       level: "All Levels",
//       link: "#",
//       release: "2025-08-10"
//     },
//     // ممكن تضيف باقي الكورسات هنا بنفس الشكل
//   ];

//   const sortedCards = [...cards].sort((a, b) => {
//     switch (order) {
//       case "newest_first":
//         return new Date(b.release) - new Date(a.release);
//       case "oldest_first":
//         return new Date(a.release) - new Date(b.release);
//       case "course_title_az":
//         return a.title.localeCompare(b.title);
//       case "course_title_za":
//         return b.title.localeCompare(a.title);
//       default:
//         return 0;
//     }
//   });

//   return (
//     <div className="tutor-course-filter">
//       <form>
//         <select value={order} onChange={(e) => setOrder(e.target.value)} className="tutor-form-control tutor-form-select">
//           <option value="newest_first">Release Date (newest first)</option>
//           <option value="oldest_first">Release Date (oldest first)</option>
//           <option value="course_title_az">Course Title (a-z)</option>
//           <option value="course_title_za">Course Title (z-a)</option>
//         </select>
//       </form>

//       <div className="tutor-course-list tutor-grid tutor-grid-3">
//         {sortedCards.map((card) => (
//           <CardItem key={card.id} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CardList;
