import styles from "../index.css"
import Accordion from "./accordion"
 
 
function Questions({questionMenu}){
	return(
		<>
			<section id="question">
				<div>
					<div className="question">
						<div className="openQ">
							<div><div className="faq">FAQ</div></div>
							<p className="whatC">Have any questions?</p>
							<div className="openQuestion">
								<div className="opendiv">
									{
										questionMenu.map(item=> <Accordion title={item.title}>{item.text}</Accordion>)
									}
								</div>

							</div>
						</div>
						<div className="light wdim100">
							<img src={"./assets/" + "faq.png"} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Questions