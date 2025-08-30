import { GoChevronDown } from "react-icons/go";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navigation" className="fixed-top navbar-light bg-faded site-navigation">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-4">
            <div className="site-logo">
              <Link to="/home" className="navbar-brand">
                <img src="/assets/icons/Edusion.png" alt="Edusion" />
              </Link>
            </div>
          </div>

          <div className="header-right">
            <div className="col-lg-6 col-md-9 col-8">
              <nav id="main-menu" className="ms-auto">
                <ul>
                  <li>
                    <Link to="/home">
                      Home <GoChevronDown size={14} style={{ marginLeft: "5px" }} />
                    </Link>
                    <ul className="sub-menu">
                      <li><Link to="/home1">Home 1</Link></li>
                      <li><Link to="/Home2">Home 2</Link></li>
                      <li><Link to="/home3">Home 3</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/pages">
                      Pages <GoChevronDown size={14} style={{ marginLeft: "5px" }} />
                    </Link>
                    <ul className="subMenu">
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
                    <ul className="subMenu">
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
                    <ul className="subMenu">
                      <li><Link to="/standard-blog">Standard Blog</Link></li>
                      <li><Link to="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12">
            <div className="home_lc">
              <Link to="/search" className="hlc search_btn"><FiSearch size={20} /></Link>
              <Link to="/close" className="hlc close_btn"><IoClose size={22} /></Link>
              <Link to="/cart" className="hlc cart">
                <FiShoppingCart size={20} />
                <span className="active">0</span>
              </Link>
            </div>

            <div className="call_to_action">
              <Link className="btn_one" to="/dashboard">Login</Link>
              <Link className="btn_two" to="/student-registration">Sign Up</Link>
            </div>

            <div className="search_from_area">
              <form action="/search">
                <input type="text" className="form-control home_si" name="s" placeholder="Search Course here" required />
                <input type="hidden" name="post_type" value="courses" />
                <button type="submit" className="btn btn-main"><i className="ti-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
