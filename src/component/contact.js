import { useContext } from "react"
import styles from "../index.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { DataContext } from "../App"
function Contact(){
	const value=useContext(DataContext)
	const contact1=value.contact1
	const contact2=value.contact2
	return(
		<section className="bgCon" id="contact">
			<div className="contactFlex">
				<div className="call">
					{
						contact1.map(item=>
							<>
							<h1 className="txtStart">{item.title}</h1>
							<p className="fnt">{item.text}</p>
							<h3 className="pd2C">{item.locationName}</h3>
							<p className="fnt"> {item.location}</p>
							<h3 className="calPd8">{item.contact}</h3>
							<p className="fnt">{item.call}</p>
							</>
							)
					}
					<div>
					</div>
				</div>

				<div className="input">
						{
							contact2.map(item=>
								<>
										<h1 className="txtStart">{item.title}</h1>
										<div className="mr2">
											<label >{item.name}</label>
											<div><input type="text" className="inputs" /></div>
										</div>
										<div className="mr2">
											<label >{item.email}:</label>
											<div><input type="text" className="inputs" /></div>
										</div>
										<div className="mr2">
											<label >{item.help}:</label>
											<div><textarea className="txtArea"></textarea></div>
										</div>
										<div>
										<button className="btnSend">{item.send} <AiOutlineArrowRight /></button>
										</div>
								</>)
						}
					
				</div>
			</div>
		</section>
	)
}
export default Contact