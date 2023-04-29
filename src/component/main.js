import styles from "../index.css";
function Main({information}) {

	
	return(

		<>
		<main id="know">
		<div className="wd-80">
			<div className="aboutme ">
					<p>About Me</p>
			</div>
				<h1>Know Me More</h1>
				<div className="Know">
					<article>
						<h2>Hi, I'm <span>Shahmirze Mammadyarli</span></h2>
						<p className="pt2">
							I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
						</p>
					</article>
					<article>
							<div>2<p className="bgYellow"></p></div>
							<h2>Years of <span style={{fontWeight:700}}>Experiance</span> </h2>
					</article>
				</div>
			<div className="Elaqe">
				<div className="nameEm wd-600 mr-auto" >
					{ information && information.length > 0 ?
						information.map((item,i)=> i===0 ||i===1 ?  <div className="mr-auto600"><p>{item.target}</p> <p className="bold">{item.inf}</p>  </div>:"")
						:""
					}
				</div>
				<div className="nameEm wd-400 mr-auto" >
					{ information && information.length > 0 ?
						information.map((item,i)=> i===2 ||i===3 ?  <div className="mr-auto600"><p>{item.target}</p> <p className="bold">{item.inf}</p>  </div>:"")
						:""
					}
				</div>
			</div>
		 </div>
		</main>
		</>
	)
}

export default Main