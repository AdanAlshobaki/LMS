import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="row">
  
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="single_footer about_widget">
              <a href="/">
                <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/logo3.png" alt="logo" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
              </p>
              <div className="foot_social">
                <span>Connect with: </span>
                <ul>
                  <li><a href="#instagram"><FaInstagram /></a></li>
                  <li><a href="#facebook"><FaFacebookF /></a></li>
                  <li><a href="#youtube"><FaYoutube /></a></li>
                  <li><a href="#pintrest"><FaPinterestP /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links + Contact in one row */}
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="footer-links-row">
              {/* Courses */}
              <div className="single_footer">
                <h4>Courses</h4>
                <ul>
                  <li><a href="#">Creative Writing</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">SEO Business</a></li>
                  <li><a href="#">Social Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">Website Development</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="single_footer">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Knowledge Base</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Market API</a></li>
                  <li><a href="#">Support Team</a></li>
                </ul>
              </div>

              <div className="single_footer">
                <h4>Contact Info</h4>
                <div className="sf_contact">
                  <FaMobileAlt /> <h3>Phone Number</h3>
                  <p>+88 457 845 695</p>
                </div>
                <div className="sf_contact">
                  <FaEnvelope /> <h3>Email Address</h3>
                  <p>example@yourmail.com</p>
                </div>
                <div className="sf_contact">
                  <FaMapMarkerAlt /> <h3>Location</h3>
                  <p>California, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-btm fc">
          <div className="col-lg-6 col-sm-6">
            <div className="footer_copyright">
              <p>© 2025 Edusion. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="footer_menu">
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Special</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
