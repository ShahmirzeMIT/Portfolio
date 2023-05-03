import { useContext } from "react"
import styles from "../index.css"
import {BsFillPaletteFill, BsDisplay} from "react-icons/bs"
import {FaPencilRuler, FaChartArea , FaBullhorn} from 'react-icons/fa'
import {HiPaintBrush} from 'react-icons/hi2'
import { DataContext } from "../App"
const logo=[
		   {logo:<BsFillPaletteFill className='logos' />},
		   {logo:<BsDisplay  className='logos'/>},
		   {logo:<FaPencilRuler className='logos' />},
		   {logo:<HiPaintBrush className='logos' />},
		   {logo:<FaChartArea className='logos' />},
		   {logo:<FaBullhorn className='logos' />}
		]
function Projects() {
	const value=useContext(DataContext)
	
	const project=value.project
	return(
		<section className="bgGray" id="experience">
			<div className="wd80 mrp5">		
			<div className="whatBtn mr5 mrp5 wd80" >
				<p className="">
					What I do?
				</p>
				<h1>How I can help your next project</h1>
			</div>
			<div className="course">
				<div className="design">
					{project.map((item,i) => (
							<div className="txtCenter" key={i}>
							<div>
							{logo[i].logo}
							</div>
							<h2>
							{item.work}
							</h2>
							<p className="text">
							{item.text}
							</p>
						</div>
						)
						)}
					
				</div>
				
			</div>
			</div>
		</section>
	)
}
export default Projects