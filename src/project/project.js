import styles from "./project.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPalette,faDisplay ,faPenRuler,faPaintbrush,faChartArea,faBullhorn} from '@fortawesome/free-solid-svg-icons'
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
						<FontAwesomeIcon icon={faPalette} className="logos" />
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
						<FontAwesomeIcon icon={faDisplay}  className="logos"/>
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
						<FontAwesomeIcon icon={faPenRuler} className="logos" />
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
						<FontAwesomeIcon icon={faPaintbrush} className="logos" />
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
						<FontAwesomeIcon icon={faChartArea} className="logos" />
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
						<FontAwesomeIcon icon={faBullhorn} className="logos" />
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