import styles from '../index.css'

import { FaPhoneAlt ,FaTwitter , } from 'react-icons/fa';
import {AiOutlineArrowDown}  from "react-icons/ai"
import{ FiMenu} from "react-icons/fi"
import {BsArrowDownCircle, BsFacebook, BsInstagram, BsLinkedin ,BsReddit} from "react-icons/bs"
import Typewriter from "typewriter-effect";
import { useContext, useState } from 'react';
import { Box, Button, ListItemText, MenuItem, MenuList, Modal, Paper, Typography } from '@mui/material';
import App, { DataContext, LanguageContext} from '../App';

export const Header=()=> {
	const [open, setOpen] =useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const value=useContext(DataContext)
	const menu=value.headerMenu
	const header=value.header
	const [lang,setLang]=useContext(LanguageContext)
	console.log(lang)
	return(
		<>
		<header>
			<nav>
			<div className="menu wd-80">
				<div>
					<img src={"./assets/img/" + "logo.png"} />
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
									{
										menu.map((item,i)=>
										<MenuItem key={i}>
											<ListItemText key={i}  onClick={handleClose} >
												<a key={i} href={`#${item.id}`}>{item.menu}</a> 
											</ListItemText>
										</MenuItem>)
									} 
									<MenuItem>
										<ListItemText  onClick={handleClose}>
											<a href="https://twitter.com/ShahmirzeM" className='openMenuLink' target="_blank"><FaTwitter/></a> 
											<a href="" className='openMenuLink' target="_blank"><BsFacebook/></a> 
											<a href="https://www.instagram.com/botman_ru/" className='openMenuLink' target="_blank"><BsInstagram/></a> 
											<a href="https://www.linkedin.com/in/sahmirze-memmedyarov-69ba60220/" className='openMenuLink' target="_blank"><BsLinkedin/></a> 
											<a href="https://www.reddit.com/user/Aggressive-Light-980" className='openMenuLink' target="_blank"><BsReddit/></a> 
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
						<li><Button className="pd0" onClick={()=>setLang("en")}>En</Button></li>	
						<li><Button className="pd0" onClick={()=>setLang("az")}>Az</Button></li>	
					</ul>
				</div>
			</div>
			</nav>
			<div className="content wd-80 p4em">
			<div className="openword">
				{header.map((item,i)=><>
					<h1 className={`${lang==="az"?"fs28":""}`}>{item.message}</h1>
	
					<div  className="typewriter">
					<Typewriter
							onInit={(typewriter)=> {
							typewriter
								.typeString(`${item.typewriter1}`)
								.pauseFor(1000)
								.deleteAll()
								.typeString(`${item.typewriter2}`)
								.pauseFor(1000)
								.deleteAll()
								.typeString(`${item.typewriter3}`)
								.start();}}
						/>	
				</div>
				<p>{item.location}</p>
				<div className="contact">
					<a href="#works" >{item.works}</a>
					<a href="#contact"  >{item.contact}<span><BsArrowDownCircle/></span></a>
				</div>
				</> )}
				
			</div>
			<div className="face">
				<div className="image">
					<img src={"/assets/img/" + "greencard.jpeg"} />
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