import AchievementCard from "./AchievementCard";
import { CiFaceSmile } from "react-icons/ci";
import { FaFileAlt, FaHeadphones, FaUser } from "react-icons/fa";



import "./app.css";

const ACHIEVEMENTS = [
  { id: 1, icon: <CiFaceSmile />, color: "#000dffff", number: 854, text: "Enrolled Students" },
  { id: 2, icon: <FaFileAlt />, color: "#EE6C20", number: 521, text: "Academic Programs" },
  { id: 3, icon: <FaHeadphones />, color: "#15BE56", number: 163, text: "Winning Award" },
  { id: 4, icon: <FaUser />, color: "#BB0852", number: 93, text: "Certified Students" },
];


export default function Achievements() {
  return (
    <div className="rowAc gy-4">
      {ACHIEVEMENTS.map((item) => (
        <AchievementCard
          key={item.id}
          icon={item.icon}
          color={item.color}
          number={item.number}
          text={item.text}
        />
      ))}
    </div>
  );
}
