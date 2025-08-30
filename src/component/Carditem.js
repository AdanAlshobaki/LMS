function CardItem({ image, price, category, title, lessons, hours, minutes, rating, level, link }) {
  return (
    <div className="tutor-card tutor-course-card">
      <div className="course-slide">
        <div className="course-img">
          <img width="420" height="280" src={image} alt={title} />
          <div className="course-date">
            <span className="month">{price ? `$${price}` : 'Free'}</span>
          </div>
        </div>
        <div className="course-content">
          <div className="c_btn2">
            <a className="c_btn" href={category.link}>{category.name}</a>
          </div>
          <h3><a href={link}>{title}</a></h3>
          <span><i className="fa fa-file-text"></i>{lessons} Lessons</span>
          <span className="course_duration">
            <i className="fa fa-clock-o"></i>{hours} hours {minutes && `${minutes} minutes`}
          </span>
          <span><i className="fa fa-star"></i>{rating}</span>
          <span><i className="fa fa-signal"></i><strong>{level}</strong></span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
