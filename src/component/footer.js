import { FaFacebook, FaPinterest } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { CiMap, CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <div className="footer section-padding">
      <div className="FooterContainer">
        <div className="FooterRow">
          {/* About + Social */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="single_footer about_widget">
              <a href="/">
                <img src="/assets/icons/Edusion.png" alt="Contact" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
              </p>

              <div className="foot_social">
                <span>Connect with:</span> 
                <ul>
                  <li><a href="#instagram"><IoLogoInstagram /></a></li>
                  <li><a href="#facebook"><FaFacebook className="fa" /></a></li>
                  <li><a href="#youtube"><TiSocialYoutubeCircular className="fa" /></a></li>
                  <li><a href="#pinterest"><FaPinterest className="fa" /></a></li>
                </ul>
                
              </div>
            </div>
          </div>

         {/* Navigation Links */}
<div className="col-lg-8 col-md-12 col-xs-12">
  <div className="row NavRow">   
    <div className="col-lg-4 col-md-4 col-sm-6 col-12 widget_nav_menu">
      <div className="single_footer">
        <h4>Courses</h4>
        <ul>
          <li><a href="#return">Creative Writing</a></li>
          <li><a href="#return">Digital Marketing</a></li>
          <li><a href="#return">SEO Business</a></li>
          <li><a href="#return">Social Marketing</a></li>
          <li><a href="#return">Graphic Design</a></li>
          <li><a href="#return">Website Development</a></li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6 col-12 widget_nav_menu">
      <div className="single_footer">
        <h4>Company</h4>
        <ul>
          <li><a href="#return">About us</a></li>
          <li><a href="#return">Knowledge Base</a></li>
          <li><a href="#return">Affiliate Program</a></li>
          <li><a href="#return">Community</a></li>
          <li><a href="#return">Market API</a></li>
          <li><a href="#return">Support Team</a></li>
        </ul>
      </div>
    </div>

    {/* Contact Info */}
    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="single_footer">
        <h4>Contact Info</h4>
        <div className="sf_contact">
          <span><CiMobile4 className="icon" /></span>
          <h3>Phone Number</h3>
          <p>+88 457 845 695</p>
        </div>
        <div className="sf_contact">
          <span><TfiEmail className="icon" /></span>
          <h3>Email Address</h3>
          <p>example@yourmail.com</p>
        </div>
        <div className="sf_contact">
          <span><CiMap className="icon" /></span>
          <h3>Location</h3>
          <p>California, USA</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Bottom Footer */}
        <div className="row footer-btm fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>© 2025 Edusion. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li><a href="#return">Terms &amp; Conditions</a></li>
                <li><a href="#return">Special</a></li>
                <li><a href="#return">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
