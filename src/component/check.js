import styles from "../index.css"

import { useState } from "react"

const menu=['All','Details','Mockups','YouTube Videos','Vime Videos']
const image=[
	{ src:"project-1.jpg", cat:[0,1] },
	{ src:"project-2.jpg", cat:[0,2] },
	{ src:"project-3.jpg", cat:[0,3] },
	{ src:"project-4.jpg", cat:[0,4] },
	{ src:"project-5.jpg", cat:[0,2] },
	{ src:"project-6.jpg", cat:[0,1] }
]

function Check() {
	const [open, setOpen] = useState(0)

	console.log(open )
	return(
		<>
		<section id='project'>
			<div className="bgBeige">
				<div className="contentP">
				<div className="centr">
				</div>
				<h1>Some of my most recent projects</h1>
				<div className="pickOut">
					<ul>
						{
							menu.map( (item,i) => <li key={i} onClick={ () => setOpen(i) }>{item}</li>)
						}
					</ul>
				</div>
					<div className={`pictures }`}>
						{
							image.map((item)=>
							{
								if(item.cat.includes(open)){
									return(
										<div className="wd300">
										<img src={"./assets/" + item.src} />
										</div>
									)
									
								}
							}) 
								
							 
						}
					</div>
				</div>
			</div>
			
		</section>
		</>
	)
}
export default Check