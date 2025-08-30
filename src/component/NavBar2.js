import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <nav id="navigation2" className=" navbar-light bg-faded site-navigation heder-two">
      <div className="container2">
        <div className="navbar-row">
          <div className="col-lg-2 col-md-3 col-4">
            <div className="site-logo2">
              <Link to="/home" className="navbar-brand2">
                <img src="/assets/icons/Edusion.png" alt="Edusion" />
              </Link>
            </div>
          </div>

          <div className="header-right2">
            <div className="col-lg-6 col-md-9 col-8">
              <nav id="main-menu" className="ms-auto2">
                <ul>
                  <li>
                    <Link to="/home">
                      Home <GoChevronDown size={14} style={{ marginLeft: "5px" }} />
                    </Link>
                    <ul className="sub-menu2">
                      <li><Link to="/home1">Home 1</Link></li>
                      <li><Link to="/Home2">Home 2</Link></li>
                      <li><Link to="/home3">Home 3</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/pages">
                      Pages <GoChevronDown size={14} style={{ marginLeft: "5px" }} />
                    </Link>
                    <ul className="subMenu2">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/instructors1">Instructors Style 1</Link></li>
                      <li><Link to="/instructors2">Instructors Style 2</Link></li>
                      <li><Link to="/event">Event</Link></li>
                      <li><Link to="/details">Event Details</Link></li>
                      <li><Link to="/faq">FAQ</Link></li>
                      <li><Link to="/error">404</Link></li>
                      <li><Link to="/signUp">Registration</Link></li>
                      <li><Link to="/login">Login</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/courses">
                      Courses <GoChevronDown size={14} style={{ marginLeft: "5px" }} />
                    </Link>
                    <ul className="subMenu2">
                      <li><Link to="/courses-style1">Courses Style 1</Link></li>
                      <li><Link to="/courses-style2">Courses Style 2</Link></li>
                      <li><Link to="/courses-style3">Courses Style 3</Link></li>
                      <li><Link to="/courses-details1">Courses Details 1</Link></li>
                      <li><Link to="/courses-details2">Courses Details 2</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">
                      Blog <GoChevronDown size={14} style={{ marginLeft: "5px" }} />
                    </Link>
                    <ul className="subMenu2">
                      <li><Link to="/standard-blog">Standard Blog</Link></li>
                      <li><Link to="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
         
  <div className="call_to_action2">
    <Link className="btn_one1" to="/dashboard">Contact</Link>
    <Link className="btn_two2" to="/student-registration">Account</Link>
  </div>

           
          </div>
        </div>
    </nav>
  );
}

export default NavBar2;
