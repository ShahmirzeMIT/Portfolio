import styles from './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo.png'
import Face from '../assets/greencard.jpeg'
import { Link, animateScroll as scroll } from "react-scroll";
import { faEnvelope,faPhoneFlip,faArrowDown,faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {
	return(
			<>
    <header>

<nav>
    <div className="menu wd-80">
    {/* <img src="img/logo.png" alt=""> */}
    
	   <div>
		<img src={Logo} />
	   </div>
	   <div className="rightList">
		  <ul>
			 <li className="fs12"><FontAwesomeIcon icon={faPhoneFlip} /> (994) 055 698 45 46</li>
			 <li><FontAwesomeIcon icon={faBars} /></li>
		  </ul>
	   </div>
    </div>
</nav>
<div className="content wd-80 p4em">
    <div className="openword">
	   <h1>HI, I'M A FREELANCER</h1>
	   <p>based in Toronto, Canada</p>
	   <div className="contact">
		  <a href="">Veiw my Works</a>
		  <a href="">Contact Me <FontAwesomeIcon icon={faArrowDown} className='arrow-down' /></a>
	   </div>
    </div>
    <div className="face">
	   <div className="image">
		  <img src={Face} />
	   </div>

    </div>
</div>
<div className="scroll">
	<FontAwesomeIcon icon={faArrowDown} className='animasiya' />
</div>
</header>

			</>
	)
}

export default Header