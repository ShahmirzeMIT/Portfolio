import styles from "../index.css"

function Laptop(){
	return(
		<>
			<section className="psR">
				<div className="lapimg">
					
					<img src={"/assets/img/" + "laptop.jpg"} />
					
				</div>
				<div className="shadow"></div>
				<div className="word">
					<h1 className="white">Interested in working with me?</h1>
					<div className="btn1"><button>Hire Me!</button></div>
				</div>
			</section>
		</>
	)
}

export default Laptop