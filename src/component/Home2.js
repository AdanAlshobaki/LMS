import { FaFacebook, FaTwitter, FaPinterest ,FaEnvelope,FaClock, FaPhoneAlt} from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

function Home2(){
    return(
<header>
    <section className="logo-contact" >
	<div className="container2">
		<div className="row2">
			<div className="col-lg-3 col-md-4 col-sm-6 col-12">
				<div className="single-top-contact">
			    <FaPhoneAlt className="fa"/>
					<h4 > +(354) 6800 37849 </h4>
				</div>
			</div>
			<div className="col-lg-3 col-md-4 col-sm-6 col-12">
				<div className="single-top-contact">							
				<FaEnvelope className="fa"/>
					<h4><a href="mailto:hello@edusion.com">hello@edusion.com</a></h4>	
				</div>
			</div>
			<div className="col-lg-3 col-md-4 col-sm-6 col-12">
				<div className="single-top-contact">
					<FaClock className="fa"/>
					<h4 >Mon to sat Open: 9am - 6pm</h4>
				</div>
			</div>
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			<div className="social" >
				 <a href="#twitter"><FaTwitter className="fa" /></a>
				  <a href="#facebook" ><FaFacebook  className="fa"/></a>
				  <a href="#youtube"><TiSocialYoutubeCircular className="fa"/></a>
                 <a href="#pintrest" ><FaPinterest className="fa" /></a>
          </div>
			</div>					
		</div>
	</div>
</section>
</header>
);
}
export default Home2