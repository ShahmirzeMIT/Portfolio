import styles from "../index.css"
import { useState } from "react"


function Portfolio({menu,image}) {
	const [filter, setFilter] = useState(0)

	function filterByCat() {
			 	return filter === 0 ? image :  image.filter( item => item.cat.includes(filter))
	 }
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
						{ menu  && menu.length > 0 ?
							menu.map( (item,i) => <li onClick={ () => setFilter(i) }>{item}</li>)
							:""
						}
					</ul>
				</div>
					<div className={`pictures ${filter!==0 ? "jsCenter" :""}`}>
						{ image && image.length>0 ?
						     filterByCat().map( pic =><div className={`wd300 ${filter!==0 ? " pd15":""} `}> <img src={"/assets/img/" + pic.src} /></div>  )
								:""
						}
					</div>
				</div>
			</div>
			
		</section>
		</>
	)
}
export default Portfolio