import Home2 from "./component/Home2";
import NavBar2 from "./component/NavBar2";
import NavBar from "./component/NavBar";
import TopBar from "./component/topBar";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import Features from "./component/Feature";
import Topic from "./component/Topic";
import Contact from "./component/ContactUs";
import SectionTop from "./component/sectionTop";
import SendMessage from "./component/SendMessage";
import Footer from "./component/footer";
import Courses from "./component/Courses";
import Relasedata from "./component/Relasedata";
import CardList from "./component/Cardlist";
import HomeAbout from "./component/Homeabout";
import TopCourses from "./component/TopCourses";


function App() {
  return (
    <Router>
    
      <TopBar />
    
      <Routes>
               <Route path="/" element={  <NavBar/>} />
          <Route path="/home2" element={<><Home2 /><NavBar2/><Home/><Features/><Topic/><HomeAbout/><TopCourses/></>} />
               <Route path="/Contact" element={  <><NavBar/><Contact/><SectionTop/><SendMessage/><Footer/></>} />
          <Route path="/Courses" element={<><NavBar/><Courses/><Relasedata/><CardList/></>} />



         


       
      </Routes>
    </Router>
  );
}

export default App;
