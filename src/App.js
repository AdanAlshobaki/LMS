import Home2 from "./component/Home2";
import NavBar2 from "./component/NavBar2";
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


import HomeAbout from "./component/Homeabout";

import HomeOne from ".//component/HomePage1";
import CoursePage from "./component/CoursesPage";
import TopCourse2 from "./TopCourse2";
import HomeCourses from "./component/HomeCourses";
import TopAchievement from "./component/TopAchievement";
import Achievements from "./component/Achievements";
import VideoSection from "./component/VideoSection";
import PartnerCarousel from "./component/PartnerCarousel";
import CoursePromo from "./component/CoursePromo";

import TopCourses3 from "./component/TopCourses3";
import PricingSection from "./PricingSection";
import Newsletter from "./Newsletter";
import TopBlog from "./component/TopBlog";
import Blog from "./component/Blog";





function App() {
  return (
    <Router>
    
      <TopBar />
    
      <Routes>
               <Route path="/" element={ <HomeOne/>} />
          <Route path="/home2" element={<><Home2 /><NavBar2/><Home/><Features/><Topic/><HomeAbout/>< TopCourse2/><HomeCourses/>
          < TopAchievement/>< Achievements/><VideoSection/>< PartnerCarousel/><CoursePromo/><TopCourses3/><PricingSection/><Newsletter/><TopBlog/><Blog/><Footer/>
</>} />
               <Route path="/Contact" element={<><HomeOne/><Contact/><SectionTop/><SendMessage/><Footer/></>} />
          <Route path="/Courses/:id" element={<><HomeOne/><Courses/><CoursePage/><Footer/></>} />



         


       
      </Routes>
    </Router>
  );
}

export default App;
