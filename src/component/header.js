import styles from '../index.css'
import Logo from '../assets/logo.png'
import Face from '../assets/greencard.jpeg'
import { FaPhoneAlt  } from 'react-icons/fa';
import {AiOutlineArrowDown}  from "react-icons/ai"
import{ FiMenu} from "react-icons/fi"
import {BsArrowDownCircle} from "react-icons/bs"
import Typewriter from "typewriter-effect";
import { useState } from 'react';
function Header() {
	const [open, setOpen] =useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return(
		<>
		<header>

			<nav>
			<div className="menu wd-80">
				<div>
					<img src={Logo} />
				</div>
				<div className="rightList">
					<ul>
						<li className="fs12"><FaPhoneAlt /> (994) 055 698 45 46</li>
						<li><FiMenu/></li>
					</ul>
				</div>
			</div>
			</nav>
			<div className="content wd-80 p4em">
			<div className="openword">
				<h1>HI, I'M A FREELANCER</h1>
				<div  className="typewriter">
					<Typewriter
							onInit={(typewriter)=> {
							typewriter
								.typeString("DESIGNER")
								.pauseFor(1000)
								.deleteAll()
								.typeString("DEVELOPER")
								.pauseFor(1000)
								.deleteAll()
								.typeString("CALLUM")
								.start();
							
								}
							}
						/>	
						
					
				</div>
				
				<p>based in Toronto, Canada</p>
				<div className="contact">
					<a href="#works">Veiw my Works</a>
					<a href="#contact">Contact Me 
					<span><BsArrowDownCircle/></span> 
					
					</a>
				</div>
			</div>
			<div className="face">
				<div className="image">
					<img src={Face} />
				</div>

			</div>
			</div>
			<div className="scroll">
				<a href='#know'><AiOutlineArrowDown  className='animasiya'  /></a>
			</div>
		</header>

		</>
	)
}

export default Header