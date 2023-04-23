import styles from "../index.css"
import Sekil1 from "../assets/project-1.jpg"
import Sekil2 from "../assets/project-2.jpg"
import Sekil3 from "../assets/project-3.jpg"
import Sekil4 from "../assets/project-4.jpg"
import Sekil5 from "../assets/project-5.jpg"
import Sekil6 from "../assets/project-6.jpg"
function Portfolio(){
	return(
		<>
		<section>
			<div className="bgBeige">
				<div className="contentP">
				<div className="centr">
					<div className="Portfolio ">Portfolio</div>
				</div>
				<h1>Some of my most recent projects</h1>
				<div className="pickOut">
					<ul>
						<li>All</li>
						<li>Details</li>
						<li>Mockups</li>
						<li>YouTube Videos</li>
						<li>Vime Videos</li>
					</ul>
				</div>
				<div className="pictures">
					<div className="wd300">
						<img src={Sekil1} />
					</div>
					<div className="wd300">
						<img src={Sekil2} />
					</div>
					<div className="wd300">
						<img src={Sekil3} />
					</div>
					<div className="wd300">
						<img src={Sekil4} />
					</div>
					<div className="wd300">
						<img src={Sekil5} />
					</div>
					<div className="wd300">
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