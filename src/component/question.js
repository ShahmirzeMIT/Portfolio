import styles from "../index.css"
import Light from "../assets/faq.png"
import Accordion from "./accordion"

 
function Questions(){
	
	return(
		<>
			<section>
				<div>
					<div className="question">
						<div className="openQ">
							<div><div className="faq">FAQ</div></div>
							<p className="whatC">Have any questions?</p>
							<div className="openQuestion">
								<div className="opendiv">
									
									<Accordion title=" What is Callum?">
									Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.
									</Accordion>
									
									<Accordion title=" How Can I Help You?">
									Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
									Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.lp You?
									</Accordion>

									<Accordion title=" Simple process for workflow?">
									IIisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.
									</Accordion>

									<Accordion title=" Is Callum a Multi-purpose template?">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
									</Accordion>

									<Accordion title=" Why responsive one page template?">
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
									</Accordion>
								</div>

							</div>
						</div>
						<div className="light wdim100">
							<img src={Light} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Questions