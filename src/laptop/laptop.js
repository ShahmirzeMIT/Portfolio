import styles from "./laptop.css"
import Comp from "../assets/laptop.jpg"

function Laptop(){
	return(
		<>
			<section className="psR">
				<div className="lapimg">
					
					<img src={Comp} />
					
				</div>
				<div className="shadow"></div>
				<div className="word">
					<h1 className="white">Interested in working with me?</h1>
					<div className="btn"><button>Hire Me!</button></div>
				</div>
			</section>
		</>
	)
}

export default Laptop