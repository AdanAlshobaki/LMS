


export default function CourseCard({ course }) {
  return (
    <article className="course-card" data-id={course.id}>
      <div className="card-media">
        <img src={course.image} alt={course.title} />
        

      </div>
      <div className="card-body">
        <span className="badge">{course.badge}</span>
            <h3 className="card-title">{course.title}</h3>
          
    
      
        <div className="card-meta">
        
          <span className="lessons">< i className="icons"><FaBook /></i>  {course.lessons}</span>
          <span className="duration"> <i className="icons"><FaClock /> </i>{course.duration}</span>
          <span className="Rate"><i className="icons">< CiStar /></i>{course.rating}</span>
            <span className="level"><  i className="icons" ><FaSignal /></i> {course.level}</span>
        </div>
      </div>
    </article>
  );
}
