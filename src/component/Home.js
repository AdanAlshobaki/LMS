import { IoMdPaperPlane } from "react-icons/io";

function Home(){
    return(
        <section id="home" className="home_bg2"style={{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url('/assets/icons/home2.png')"
   }} >
		<div className="home-container">
			<div className="home-row">
				<div className="col-lg-12 col-sm-12 col-xs-12 text-center">	
					<div className="home_content hc_pt">
						<h1>Get smart <span><u>opportunity for</u></span> your best future</h1>
						<p>It is a long established fact that reader will be distracted readable content of a page when.</p>						
					</div>
					<div className="home_search">
						<form action="" className="banner_subs">
							<input type="text" className="form-control home_si" name="s" placeholder="Search your course here" required="required"/>
							<input type="hidden" name="post_type" value="courses"/>
							<button type="submit" className="btn btn-main">Search<IoMdPaperPlane /> </button>			
						</form>
					</div>
					<div className="home_tag">
						<span>Popular Topic:</span>
					<a href="https://wpdemothemes.com/edusion/course-category/business/?tutor-course-filter-category=64">
									Business 
								</a>
								  <span className="cat_coma">,</span>
								<a href="https://wpdemothemes.com/edusion/course-category/data-science/?tutor-course-filter-category=65">
									Data Science 
								</a>
								  <span className="cat_coma">,</span>
									<a href="https://wpdemothemes.com/edusion/course-category/digital-program/?tutor-course-filter-category=61">
									Digital Program 
								</a>
								  <span className="cat_coma">,</span>
									<a href="https://wpdemothemes.com/edusion/course-category/finance/?tutor-course-filter-category=62">
									Finance 
								</a>
								  <span className="cat_coma"></span>
								
					</div>		  
				</div>
			</div>	
		</div>
	</section>
    );
}
export default Home