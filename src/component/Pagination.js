
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ current, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      
      <div className="page-info">
        Page {current} of {totalPages}
      </div>

      
      <div className="page-controls">
     
        <button
          className="arrow-btn"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <FiChevronLeft />
        </button>

     
        {pages.map((num) => (
          <button
            key={num}
            className={`page-number ${current === num ? "active" : ""}`}
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        ))}

      
        <button
          className="arrow-btn"
          onClick={() => onPageChange(current + 1)}
          disabled={current === totalPages}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
