import styles from "../index.css"
function Main() {
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
							<div>
								2
							<p className="bgYellow"></p>
						</div>
							<h2>Years of <span style={{fontWeight:700}}>Experiance</span> </h2>
					</article>
				</div>
			<div className="Elaqe">
			<div className="nameEm wd-600 mr-auto" >
				<div  className="mr-auto600" >
					<p>Name:</p>
					<p className="bold">Shahmirze Mammadyarlı</p>
				</div>
				<div className="mr-auto600">
					<p>Email:</p>
					<p className="bold">shahmirzememmedyarov@gmail.com</p>
				</div>

			</div>	
			<div className="nameEm wd-400 mr-auto" >
				<div className="mr-auto600">
					<p>Date of Birth:</p>
					<p className="bold">   15 August,2003</p>
				</div>
				<div className="mr-auto600">
					<p>From:</p>
					<p className="bold">Baku,Azerbijan</p>
				</div>
			</div>
		</div>	
		</div>
		
		</main>
	
		</>
	)
}

export default Main