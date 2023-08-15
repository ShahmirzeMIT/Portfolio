import { useContext, useEffect } from "react";
import styles from "../index.css";
import { useState } from "react";
import { DataContext, LanguageContext } from "../App";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CardMedia } from "@mui/material";
import {BsGithub} from "react-icons/bs"
import {FaSitemap} from "react-icons/fa"
function Portfolio() {
  const [pickOut,setPickOut]=useState(0)
  const [portImage,setPortImage]=useState([])
  const [filter, setFilter] = useState(0); 
  const value = useContext(DataContext);
  const menu = value.menu;
  const [image,setImage]=useState([])
  const portfolio = value.data;

  useEffect(()=>{
    fetch('./assets/json/pImage.json')
    .then((data)=>data.json())
    .then((data)=>setImage(data.data))

    fetch('./assets/json/pVideo.json')
    .then((data)=>data.json())
    .then((data)=>setPortImage(data.data))
  },[])
  const [lang, setLang] = useContext(LanguageContext);
  const values = ['xxl-down'];
	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);
   
	function handleShow(breakpoint) {
	  setFullscreen(breakpoint);
	  setShow(true);
	}
  function filterByCat() {
    return filter === 0 ? image : image.filter((item) =>item.menuId.includes(filter));
  }
  return (
    <>
      <section id="project">
        {
          portfolio && portfolio.length>0 && image.length>0 ?
          <>
          <div className="bgBeige">
          <div className="contentP">

          {
            portfolio.filter((item)=>item.name=="portfolioTarget")
            .map((item ,i)=> 
              <div className="centr whitePo" key={i}>
                  <div className="Portfolio whitePo">{item[lang]}</div>
                </div>
              )
          }
          {
            portfolio.filter((item)=>item.name=="portfolioTitle")
            .map((item ,i)=> <h1 key={i} className="whitePo">{item[lang]}</h1>
              )
          }
           <div className="pickOut">
              <ul>
                {
                  portfolio.filter((item)=>item.id==53 || item.id==54 || item.id==55 ||item.id==56 || item.id==57 )
                  .map((item,i)=>
                  <li key={i} onClick={() => setFilter(i)} className="whitePo">
                    {item[lang]}
                  </li>
                  )
                }
              </ul>
           </div>
           <div className={`pictures ${filter !== 0 ? "jsCenter" : ""}`}>
            {
              filterByCat().map((pic,i)=>
                  <div key={i} className={`wd300 ${filter !== 0 ? " pd15" : ""}`}>
                      {values.map((v, idx) => (
                    <div key={idx} className="me-2 mb-2 h100 card" >
                    <Button className="h100" onClick={() => handleShow(v)}>
                      
                      <div className=" h100 flexIM">  
                        <CardMedia 
                          component="img"
                          height="194"
                          image={`./assets/img/${pic.src}`}
                          alt="Paella dish"
                          onClick={()=>setPickOut(pic.id)} className="pimage"
                        /> 
                      </div>
                    </Button>
                    
                    </div>
                    
	           ))}
           
                     <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                     
                               
                        {
                          portImage.map((item,i)=>
                               item.Uplaod_id.includes(pickOut)?
                               <>
                              <div style={{display:"flex",justifyContent:"center",position:"relative",zIndex:999,bottom:0}}>
                                <br></br>
                                <p style={{margin:"2em"}}><a href={item.git} target="_blank"><BsGithub style={{fontSize:"2em",color:"black"}}/></a></p>
                                <p style={{margin:"2em"}}><a href={item.site} target="_blank"><FaSitemap style={{fontSize:"2em",color:"black"}}/></a></p>
                              </div>
                              <div className="wdfull">
                                 <video width="400" controls>
                                    <source src={"./assets/img/" + item.name} type="video/mp4"/>
                                  </video>
                              </div>
                               </>
                               :""
                          )
                        }
                        

                      </Modal.Body>
                    </Modal>   
                  </div>
              )
            }
            </div>
          </div>
          </div>
          </>
          :""
          
        }
      </section>
    </>
  );
}

export default Portfolio;