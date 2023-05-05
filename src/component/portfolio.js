import { useContext } from "react"
import styles from "../index.css"
import { useState } from "react"
import { DataContext } from "../App"


function Portfolio() {
	const [filter, setFilter] = useState(0)
	const value=useContext(DataContext)
	const menu=value.menu
	const image=value.image
	const portfolio=value.portfolio
	function filterByCat() {
			 	return filter === 0 ? image :  image.filter( item => item.cat.includes(filter))
	 }
	return(
		<>
		<section id='project'>
			<div className="bgBeige">
				<div className="contentP">
					{
						portfolio.map(item=><>
						<div className="centr">
						<div className="Portfolio ">{item.target}</div>
						</div>
						<h1>{item.text}</h1>
						</>)
					}
				
				<div className="pickOut">
					<ul>
						{
							menu.map( (item,i) => <li key={i} onClick={ () => setFilter(i) }>{item}</li>)
						}
					</ul>
				</div>
					<div className={`pictures ${filter!==0 ? "jsCenter" :""}`}>
						{
						     filterByCat().map( (pic,i) =><div key={i} className={`wd300 ${filter!==0 ? " pd15":""} `}> <img src={"/assets/img/" + pic.src} /></div>  )
						}
					</div>
				</div>
			</div>
			
		</section>
		</>
	)
}
export default Portfolio