import styles from "../index.css"
import Sekil1 from "../assets/project-1.jpg"
import Sekil2 from "../assets/project-2.jpg"
import Sekil3 from "../assets/project-3.jpg"
import Sekil4 from "../assets/project-4.jpg"
import Sekil5 from "../assets/project-5.jpg"
import Sekil6 from "../assets/project-6.jpg"
import { useState } from "react"


function Portfolio(){

	
	const [open,setOpen]=useState(0)
	return(
		<>
		<section id='project'>
			<div className="bgBeige">
				<div className="contentP">
				<div className="centr">
					<div className="Portfolio ">Portfolio</div>
				</div>
				<h1>Some of my most recent projects</h1>
				<div className="pickOut">
					<ul>
						<li onClick={()=>{
							setOpen(0)
							console.log(open)
						}}>All</li>
						<li onClick={()=>{
							setOpen(1)
							console.log(open)
						}}>Details</li>
						<li onClick={()=>{
							setOpen(2)
							console.log(open)
						}} >Mockups</li>
						<li onClick={()=>{
							setOpen(3)
							console.log(open)
						}}>YouTube Videos</li>
						<li onClick={()=>{
							setOpen(4)
							console.log(open)
						}}>Vime Videos</li>
					</ul>
				</div>

				<div className={`pictures ${open==1 || open==2 ? "jsCenter": ""} ` }>
					
									<div className={`wd300 ${open===1 || open===0 ? "" : "dpNone "}${open===1 ? "pd15": ""}`}>
									<img src={Sekil1} />
									</div>
									<div className={`wd300 ${open===2 || open===0 ? "" : "dpNone "}${open===2 ? "pd15": ""}`}>
										<img src={Sekil2} />
									</div>
									<div className={`wd300 ${open===3 || open===0 ? "" : "dpNone "}`}>
										<img src={Sekil3} />
									</div>
									<div className={`wd300 ${open===4 || open===0 ? "" : "dpNone"}`}>
										<img src={Sekil4} />
									</div>
									<div className={`wd300 ${open===1 || open===0 ? "" : "dpNone "}${open===1 ? "pd15": ""}`}>
										<img src={Sekil5} />
									</div>
									<div className={`wd300 ${open===2 || open===0 ? "" : "dpNone "}${open===2 ? "pd15": ""}`}>
										<img src={Sekil6} />
									</div>
								
					
					
				</div>
				</div>
			</div>
			
		</section>
		</>
	)
}
export default Portfolio