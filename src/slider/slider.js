import styles from './slider.css'
import Image from "../assets/greencard.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
function Slider(){
	return(
		<section className='grayS'>
			<div className='wd80Sl'>
				<div className='client'><div>Client Speak</div></div>
				<h1 className='whiteS'>What Some of my Clients Say</h1>
				<div className='sliderContent'>
					<div className='arrowRight'><FontAwesomeIcon icon={faArrowRight} /></div>
					<p className='slideText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
					<div className='slideImg'><img src={Image} /></div>
					<h5 className='txtCSlide'>Sako </h5>
					<p className='txtCSlide'>User from Canada</p>
					<div className='arrowLeft'><FontAwesomeIcon icon={faArrowLeft} /></div>

				</div>
			</div>
		</section>
	)
}

export default Slider