import styles from "../index.css"
import Accordion from "./accordion"
 const menu=[
	{
		title:"  What is Callum?",
		text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
	},
	{
		title:"   How Can I Help You?",
		text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
	},
	{
		title:"  Simple process for workflow?",
		text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
	},
	{
		title:"  Is Callum a Multi-purpose template?",
		text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
	},
	{
		title:"   Why responsive one page template?",
		text:"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet."
	},
 ]
 
function Questions(){
	
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
										menu.map(item=> <Accordion title={item.title}>{item.text}</Accordion>)
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