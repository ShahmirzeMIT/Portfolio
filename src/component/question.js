import { useContext } from "react"
import styles from "../index.css"
import Accordion from "./accordion"
import { DataContext } from "../App"
 
 
function Questions(){
	const value=useContext(DataContext)
	const questionMenu=value.questionMenu
	const question=value.question
	return(
		<>
			<section id="question">
				<div>
					<div className="question">
						<div className="openQ">
						{
                                        question.map(item=><>
									<div><div className="faq">{item.target}</div></div>
									<p className="whatC">{item.text}</p>
                                        </>)
                                }
							
							<div className="openQuestion">
								<div className="opendiv">
									{ 
										questionMenu.map((item,i)=> <Accordion key={i} title={item.title}>{item.text}</Accordion>)
									}
								</div>

							</div>
						</div>
						<div className="light wdim100">
							<img src={"/assets/img/" + "faq.png"} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Questions