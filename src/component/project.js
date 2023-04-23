import styles from "../index.css"
import {BsFillPaletteFill, BsDisplay} from "react-icons/bs"
import {FaPencilRuler, FaChartArea , FaBullhorn} from 'react-icons/fa'
import {HiPaintBrush} from 'react-icons/hi2'
function Projects() {
	
	return(
		<section className="bgGray">
			<div className="wd80 mrp5">		
			<div className="whatBtn mr5 mrp5 wd80" >
				<p className="">
					What I do?
				</p>
				<h1>How I can help your next project</h1>
			</div>
			<div className="course">
				<div className="design">
					<div className="txtCenter">
						<div>
						<BsFillPaletteFill className="logos" />
						</div>
						<h2>
						Graphic Design
						</h2>
						<p className="text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
						</p>
					</div>
					<div className="txtCenter">
						<div>
						<BsDisplay  className="logos"/>
						</div>
						<h2>
						Web Design
						</h2>
						<p className="text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
						</p>
					</div>
					<div className="txtCenter">
						<div>
						<FaPencilRuler className="logos" />
						</div>
						<h2>
						UI/UX Design
						</h2>
						<p className="text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
						</p>
					</div>
					<div className="txtCenter">
						<div>
						<HiPaintBrush className="logos" />
						</div>
						<h2>
						App Design & Develop
						</h2>
						<p className="text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
						</p>
					</div>
					<div className="txtCenter">
						<div>
						<FaChartArea className="logos" />
						</div>
						<h2>
						Business Analysis
						</h2>
						<p className="text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
						</p>
					</div>
					<div className="txtCenter">
						<div>
						<FaBullhorn className="logos" />
						</div>
						<h2>
						SEO Marketing
						</h2>
						<p className="text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
						</p>
					</div>
				</div>
				<div className="IT">

				</div>
			</div>
			</div>
		</section>
	)
}
export default Projects