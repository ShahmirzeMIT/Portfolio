import styles  from "../index.css"

function Resume({education,experience,skill1,skill2}) {
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
								{
									education.map(item=>
										<>
											<div className="study">
											<h3 className="head">{item.schoolName}</h3>
											<p className="txt">{item.year}</p>
											<p className="txt">{item.text}</p>
											</div>
											<hr/>
										</>
										)
								}
							</div>
						</div>
						<div className="experience">
						<h2 className="headtext">My Experience</h2>
							<div className="borderYellow">
								{experience.map(item=>
									<>
										<div className="study">
										<h3 className="head">{item.workName}</h3>
										<p className="txt">{item.year}</p>
										<p className="txt">{item.text}</p>
										</div>
										<hr/>
									</>
									)}
							</div>
						</div>
					</div>
					<div>
						
						<div >
						<h2 className="headtext pd1b orta">My Skills</h2>
						<div className="skill">
							<div className="eductaion">
							{skill1.map(item=>
									<>
										<div className="mr1">
											<div className="d-flex">
												<p className="font">{item.know}</p>
												<p>{item.percent}%</p>
											</div>
											<div className="yellowLine mr1 ">
												<div className={`wd${item.percent} h6`}></div>
											</div>
										</div>
									</>
									)}
							</div>
							<div className="experience">
							{skill2.map(item=>
									<>
										<div className="mr1">
											<div className="d-flex">
												<p className="font">{item.know}</p>
												<p>{item.percent}%</p>
											</div>
											<div className="yellowLine mr1 ">
												<div className={`wd${item.percent} h6`}></div>
											</div>
										</div>
									</>
									)}
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