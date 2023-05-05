import { useContext } from "react"
import styles from "../index.css"
import { DataContext } from "../App"

function Laptop(){
	const value=useContext(DataContext)
	const laptop=value.laptop
	return(
		<>
			<section className="psR">
				<div className="lapimg">
					<img src={"/assets/img/" + "laptop.jpg"} />
				</div>
				<div className="shadow"></div>
				<div className="word">
					{
						laptop.map(item=>
						<>
							<h1 className="white">{item.target}</h1>
							<div className="btn1"><button>{item.hire}!</button></div>
						</>)
					}
				</div>
			</section>
		</>
	)
}

export default Laptop