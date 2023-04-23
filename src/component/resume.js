import styles  from "../index.css"


function Resume() {
	return(
		<>
			<section id="works">
				<div className="wd80 pt5">
					<div>
						<div className="resume">
							Resume
						</div>
						<h1>A summary of My Resume</h1>
					</div>
					<div className="about">
						<div className="eductaion">
						<h2 className="headtext">My Education</h2>
							<div className="borderYellow">
								<div className="study">
									<h3 className="head">Master in Computer Engineering</h3>
									<p className="txt">Harvard University / 2015 - 2017</p>
									<p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
								</div>
								<hr/>
								<div className="study">
									<h3 className="head">Bachelor in Computer Engineering</h3>
									<p className="txt">University of California / 2014 - 2015</p>
									<p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
								</div>
								<hr/>
								<div className="study">
									<h3 className="head">International Science</h3>
									<p className="txt">Harvard University / 2013 - 2014</p>
									<p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
								</div>
								<hr/>
							</div>
							
						</div>
						<div className="experience">
						<h2 className="headtext">My Experience</h2>
							<div className="borderYellow">
								<div className="study">
									<h3 className="head">Sr. Font End Developer</h3>
									<p className="txt">Apple Inc / 2020 - current</p>
									<p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
								</div>
								<hr/>
								<div className="study">
									<h3 className="head">Jr. Font End Developer</h3>
									<p className="txt">Dribbble Inc / 2018 - 2020</p>
									<p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
								</div>
								<hr/>
								<div className="study">
									<h3 className="head">HTML Developer</h3>
									<p className="txt">Adobe Inc / 2017 - 2018</p>
									<p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
								</div>
								<hr/>
							</div>
							
						</div>
						
					</div>
					
					<div>
						
						<div >
						<h2 className="headtext pd1b orta">My Skills</h2>
						<div className="skill">
							<div className="eductaion">
								<div className="mr1">
									<div className="d-flex">
										<p className="font">Web Design</p>
										<p>65%</p>
									</div>
									<div className="yellowLine mr1 ">
										<div className="wd65 h6"></div>
									</div>
								</div>
								<div className="mr1">
									<div className="d-flex">
										<p className="font">JavsScript</p>
										<p>80%</p>
									</div>
									<div className="yellowLine mr1 ">
										<div className="wd80t h6"></div>
									</div>
								</div>
								<div className="mr1">
									<div className="d-flex">
										<p className="font">Angular Js</p>
										<p>60%</p>
									</div>
									<div className="yellowLine mr1 ">
										<div className="wd60 h6"></div>
									</div>
								</div>
							</div>
							<div className="experience">
								<div className="mr1 ">
									<div className="d-flex">
										<p className="font">HTML/CSS</p>
										<p>95%</p>
										
									</div>
									<div className="yellowLine mr1 ">
										<div className="wd95 h6"></div>
									</div>
								</div>	
								<div className="mr1 ">
									<div className="d-flex">
										<p className="font">React Js</p>
										<p>70%</p>
										
									</div>
									<div className="yellowLine mr1 ">
										<div className="wd70 h6"></div>
									</div>
								</div>	
								<div className="mr1 ">
									<div className="d-flex">
										<p className="font">Bootstrap</p>
										<p>99%</p>
										
									</div>
									<div className="yellowLine mr1 ">
										<div className="wd99 h6"></div>
									</div>
								</div>	
							</div>
						</div>
							
						</div>
					</div>
					<div className="tcenter">
						<div className="download">Download CV</div>
					</div>
				</div>

			</section>
		</>
	)
}

export default Resume