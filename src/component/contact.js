import { useContext, useRef } from "react"
import styles from "../index.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { DataContext, LanguageContext } from "../App"
import emailjs from '@emailjs/browser';
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from "react-icons/fi"
import {ImLocation} from "react-icons/im"
import {BsArrowDownCircle,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsReddit,
	BsTwitter,
	BsWhatsapp
   } from 'react-icons/bs';
function Contact(){
	const value=useContext(DataContext)
	const contact1=value.data
	const email=useRef()
	const [lang,setLang]=useContext(LanguageContext);
	const form = useRef();
	const sendEmail=(e)=>{

		e.preventDefault();
			emailjs.sendForm('service_9pjqz0p', 'template_x2apabb', form.current, 's_6XeWeh3cTKWhhki')
		.then((result) => {
		    console.log(result.text);
		    window.location.reload(false);

		}, (error) => {
		    console.log(error.text);
		});
	}
	return(
		<section className="yellow" id="contact">
			{

			contact1 && contact1.length>0 ?
			<div className="contactFlex">
				<div className="call">
					<h1 className="txtStart">{contact1.filter((item)=>item.name=="contactTitile1").map((item)=>item[lang])}</h1>
					<p className="fnt">{contact1.filter((item)=>item.name=="contact1Text").map((item)=>item[lang])}</p>
					<p className="fnt"><ImLocation/>  {contact1.filter((item)=>item.name=="contact1Location").map((item)=>item[lang])}</p>
					<p className="fnt"> <a href="tel:+994556984546" target="_blank" style={{textDecoration:"none",color:"black"}}><FiPhoneCall/>{contact1.filter((item)=>item.name=="contact1Call").map((item)=>item[lang])}</a> </p>
					<p className="fnt"><a href="https://wa.me/994556984546" target="_blank" style={{textDecoration:"none",color:"black"}}> <BsWhatsapp/>{contact1.filter((item)=>item.name=="contac1Wh").map((item)=>item[lang])}</a></p>
					<div  className="fnt"><a href="mailto:sahilmitweb@gmail.com"  target="_blank" style={{textDecoration:"none",color:"black"}}><AiOutlineMail/>  {contact1.filter((item)=>item.name=="mainEmailText").map((item)=>item[lang])}</a></div>
					<p>
					<a
							href="https://twitter.com/ShahmirzeM"
							className="openMenuLink linkPd"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsTwitter />
						</a>
						<a
							href=""
							className="openMenuLink linkPd"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsFacebook />
						</a>
						<a
							href="https://www.instagram.com/botman_ru/"
							className="openMenuLink linkPd"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsInstagram />
						</a>
						<a
							href="https://www.linkedin.com/in/sahmirze-memmedyarov-69ba60220/"
							className="openMenuLink linkPd"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsLinkedin />
						</a>
						<a
							href="https://www.reddit.com/user/Aggressive-Light-980"
							className="openMenuLink linkPd"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsReddit />
						</a>
					</p>
				</div>

				<div className="input">
							<h1 className="txtStart">{contact1.filter((item)=>item.name=="contac2Title").map((item)=>item[lang])}</h1>
							<form ref={form} onSubmit={sendEmail}>
							<div className="mr2">
								<label>{contact1.filter((item)=>item.name=="contac2Inp1").map((item)=>item[lang])}</label>
								<div><input type="text" className="inputs"name="user_name" /></div>
							</div>
							<div className="mr2" >
								<label>{contact1.filter((item)=>item.name=="contact2Inp2").map((item)=>item[lang])}:</label>
								<div><input type="text" className="inputs" name="user_email" ref={email} /></div>
							</div>
							<div className="mr2">
								<label>{contact1.filter((item)=>item.name=="contact2Inp3").map((item)=>item[lang])}:</label>
								<div><textarea className="txtArea" name="message"></textarea></div>
							</div>
							<div>
								<button className="btnSend" >{contact1.filter((item)=>item.name=="contact2Sent").map((item)=>item[lang])} <AiOutlineArrowRight /></button>
							</div>
							</form>
				</div>
			</div>:""
	}	
		</section>
	)
}

export default Contact;
