import { useContext } from "react"
import styles from "../index.css"
import { useState } from "react"
import { DataContext } from "../App"


function Portfolio() {
	const [filter, setFilter] = useState(0)
	const value=useContext(DataContext)
	const menu=value.menu
	const image=value.image
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