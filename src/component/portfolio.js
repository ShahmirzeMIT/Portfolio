import { useContext, useEffect } from "react";
import styles from "../index.css";
import { useState } from "react";
import { DataContext, LanguageContext } from "../App";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
              <div className="centr" key={i}>
                  <div className="Portfolio">{item[lang]}</div>
                </div>
              )
          }
          {
            portfolio.filter((item)=>item.name=="portfolioTitle")
            .map((item ,i)=> <h1 key={i}>{item[lang]}</h1>
              )
          }
           <div className="pickOut">
              <ul>
                {
                  portfolio.filter((item)=>item.id==53 || item.id==54 || item.id==55 ||item.id==56 || item.id==57 )
                  .map((item,i)=>
                  <li key={i} onClick={() => setFilter(i)}>
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

                    <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                        <img src={`./assets/img/${pic.src}`} onClick={()=>setPickOut(pic.id)} />
                    </Button>
	           ))}
                     <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                      
                        {
                          portImage.map((item,i)=>
                               item.Uplaod_id.includes(pickOut)?
                               <>
                              
                              <div className="wdfull">
                                 <video width="400" controls>
                                    <source src={"./assets/img/" + item.name} type="video/mp4"/>
                                  </video>
                              </div>
                              <div>
                                <br></br>
                                <p>Git</p>
                                <p><a href={item.git} target="_blank">{item.git}</a></p>
                              </div>
                              <div>
                                
                                <p>Site</p>
                                <p><a href={item.site} target="_blank">{item.site}</a></p>
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
