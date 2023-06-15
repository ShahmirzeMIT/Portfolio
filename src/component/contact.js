import { useContext } from "react"
import styles from "../index.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { DataContext, LanguageContext } from "../App"
import { Fragment } from "react"
import {BsArrowDownCircle,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsReddit,
	BsTwitter
   } from 'react-icons/bs';
function Contact(){
	const value=useContext(DataContext)
	const contact1=value.data
	const [lang,setLang]=useContext(LanguageContext);
	return(
		<section className="bgCon" id="contact">
			{

			contact1 && contact1.length>0 ?
			<div className="contactFlex">
				<div className="call">
					<h1 className="txtStart">{contact1.filter((item)=>item.name=="contactTitile1").map((item)=>item[lang])}</h1>
					<p className="fnt">{contact1.filter((item)=>item.name=="contact1Text").map((item)=>item[lang])}</p>
					<h3 className="pd2C">{contact1.filter((item)=>item.name=="contact1Live").map((item)=>item[lang])}</h3>
					<p className="fnt">{contact1.filter((item)=>item.name=="contact1Location").map((item)=>item[lang])}</p>
					<h3 className="calPd8">{contact1.filter((item)=>item.name=="contact1Call").map((item)=>item[lang])}</h3>
					<p className="fnt">{contact1.filter((item)=>item.name=="contac1Wh").map((item)=>item[lang])}</p>
					<p  className="fnt">{contact1.filter((item)=>item.name=="mainBottomEmail").map((item)=>item[lang])}</p>
					<p  className="fnt">{contact1.filter((item)=>item.name=="mainEmailText").map((item)=>item[lang])}</p>
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
							<div className="mr2">
								<label>{contact1.filter((item)=>item.name=="contac2Inp1").map((item)=>item[lang])}</label>
								<div><input type="text" className="inputs" /></div>
							</div>
							<div className="mr2">
								<label>{contact1.filter((item)=>item.name=="contact2Inp2").map((item)=>item[lang])}:</label>
								<div><input type="text" className="inputs" /></div>
							</div>
							<div className="mr2">
								<label>{contact1.filter((item)=>item.name=="contact2Inp3").map((item)=>item[lang])}:</label>
								<div><textarea className="txtArea"></textarea></div>
							</div>
							<div>
								<button className="btnSend">{contact1.filter((item)=>item.name=="contact2Sent").map((item)=>item[lang])} <AiOutlineArrowRight /></button>
							</div>
				</div>
			</div>:""
	}	
		</section>
	)
}

export default Contact;
