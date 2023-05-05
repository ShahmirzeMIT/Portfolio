import { useContext } from "react"
import styles  from "../index.css"
import { DataContext } from "../App"

function Resume() {
	const value=useContext(DataContext)
	const education=value.education
	const experience=value.experience
	const skill1=value.skill1
	const skill2=value.skill2
	const resume=value.resume
	return(
		<>
			<section id="works">
				<div className="wd80 pt5">
					<div>
						{
							resume.map(item=><>
								<div className="resume">
									{item.target}
								</div>
								<h1>{item.text}</h1>
							</>)
						}
					</div>
					<div className="about">
						<div className="eductaion">
						{
							resume.map(item=><>
								<h2 className="headtext">{item.education}</h2>
							</>)
						}
						
							<div className="borderYellow">
								{
									education.map((item,i)=>
										<>
											<div className="study" key={i} >
											<h3 className="head" >{item.schoolName}</h3>
											<p className="txt" >{item.year}</p>
											<p className="txt" >{item.text}</p>
											</div>
											<hr/>
										</>
										)
								}
							</div>
						</div>
						<div className="experience">
						{
							resume.map(item=><>
								<h2 className="headtext">{item.experience}</h2>
							</>)
						}
							<div className="borderYellow">
								{
									experience.map((item,i)=>
									<>
										<div className="study"  key={i}>
										<h3 className="head" >{item.workName}</h3>
										<p className="txt" >{item.year}</p>
										<p className="txt" >{item.text}</p>
										</div>
										<hr/>
									</>
									)
									}
							</div>
						</div>
					</div>
					<div>
						
						<div >
						{
							resume.map(item=><>
								<h2 className="headtext">{item.skill}</h2>
							</>)
						}
						<div className="skill">
							<div className="eductaion">
							{
								skill1.map((item,i)=>
									<>
										<div className="mr1"   key={i}>
											<div className="d-flex" >
												<p className="font"  >{item.know}</p>
												<p  >{item.percent}%</p>
											</div>
											<div className="yellowLine mr1 "  >
												<div className={`wd${item.percent} h6`}  key={i}></div>
											</div>
										</div>
									</>
									)}
							</div>
							<div className="experience">
							{
								skill2.map((item,i)=>
									<>
										<div className="mr1"  key={i}>
											<div className="d-flex"  >
												<p className="font" >{item.know}</p>
												<p >{item.percent}%</p>
											</div>
											<div className="yellowLine mr1 ">
												<div className={`wd${item.percent} h6`} key={i} ></div>
											</div>
										</div>
									</>
									)
									}
							</div>
						</div>
							
						</div>
					</div>
					<div className="tcenter">
						{
							resume.map(item=><>
								<div className="download"><a href="./assets/cv/cv.pdf" download>{item.download}</a></div>
							</>)
						}
						
					</div>
				</div>

			</section>
		</>
	)
}

export default Resume