import styles from "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faArrowRight} from '@fortawesome/free-solid-svg-icons'
function Contact(){
	return(
		<section className="bgCon">
			<div className="contactFlex">
				<div className="call">
					<h1 className="txtStart">Let's get in touch</h1>
					<p className="fnt">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
					<h3 className="pd2C">Living in</h3>
					<p className="fnt">Baku, Moskva Prospekti 52 </p>
					<h3 className="calPd8">Call</h3>
					<p className="fnt">(+994) 55 698 45 46 </p>
					<div>
					</div>
				</div>

				<div className="input">
					<h1 className="txtStart">Estimate your Project?</h1>
					<div className="mr2">
						<label >What is Your Name</label>
						<div><input type="text" className="inputs" /></div>
					</div>
					<div className="mr2">
						<label >Your Email Address:</label>
						<div><input type="text" className="inputs" /></div>
					</div>
					<div className="mr2">
						<label >How can I Help you?:</label>
						<div><textarea className="txtArea"></textarea></div>
					</div>
					<div>
						<button className="btnSend">Send <FontAwesomeIcon icon={faArrowRight} /></button>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact