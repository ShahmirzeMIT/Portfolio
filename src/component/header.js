import styles from '../index.css'
import Logo from '../assets/logo.png'
import Face from '../assets/greencard.jpeg'
import { FaPhoneAlt ,FaTwitter , } from 'react-icons/fa';
import {AiOutlineArrowDown}  from "react-icons/ai"
import{ FiMenu} from "react-icons/fi"
import {BsArrowDownCircle, BsFacebook, BsInstagram, BsLinkedin ,BsReddit} from "react-icons/bs"
import Typewriter from "typewriter-effect";
import { useState } from 'react';
import { Box, Button, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Modal, Paper, Typography } from '@mui/material';
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
						<li><Button onClick={handleOpen} className='btnOpen'><FiMenu/> </Button>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
							>
							<Box  sx={{height:"100%"}} >
							<Paper sx={{ maxWidth: '100%',textAlign:"center", margin:"0 auto",background:"black",opacity:0.7,height:"100%"}}>
								<MenuList  sx={{
								color:"white",
								paddingTop:"5em"
								}}>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#home">Home</a> 
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#know">About Me</a> 
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#experience">What I do</a> 
										</ListItemText>
									</MenuItem>
									
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#works">Resume</a>
										 </ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#project">Portofilo</a> 
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#question">FAQ</a> 
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#slider">Client Speak</a>  
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="#contact">Contact Me</a> 
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="https://twitter.com/ShahmirzeM" className='openMenuLink' target="_blank"><FaTwitter/></a> 
											<a href="" className='openMenuLink' target="_blank"><BsFacebook/></a> 
											<a href="https://www.instagram.com/botman_ru/" className='openMenuLink' target="_blank"><BsInstagram/></a> 
											<a href="https://www.linkedin.com/in/sahmirze-memmedyarov-69ba60220/" className='openMenuLink' target="_blank"><BsLinkedin/></a> 
											<a href="" className='openMenuLink' target="_blank"><BsReddit/></a> 
											<a href="" className='openMenuLink' target="_blank"></a> 
											
										</ListItemText>
									</MenuItem>
								</MenuList>
							</Paper>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								
							</Typography>
							</Box>
						</Modal>
						</li>
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
				
				<p>based in Baku, Azerbaijan</p>
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