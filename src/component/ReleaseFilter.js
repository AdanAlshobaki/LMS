
 function ReleaseFilter({ value, onChange }) {
  return (
    <div className="release-filter">
      <select
        id="releaseSort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="release-select">
      
        <option value="newest_first">Release Date (newest first)</option>
        <option value="oldest_first">Release Date (oldest first)</option>
        <option value="course_title_az">Course Title (a-z)</option>
          <option value="course_title_za">Course Title (z-a)</option>
      </select>
    </div>
  );
}
export default ReleaseFilter