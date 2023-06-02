import { useContext } from "react";
import styles from "../index.css";
import { useState } from "react";
import { DataContext, LanguageContext } from "../App";
import { Fragment } from "react";

function Portfolio() {
  const [filter, setFilter] = useState(0);
  const value = useContext(DataContext);
  const menu = value.menu;
  const [image,setImage]=useState([])
  const portfolio = value.data;

  useState(()=>{
    fetch('./assets/json/pImage.json')
    .then((data)=>data.json())
    .then((data)=>setImage(data.data))
  },[])
  
  const [lang, setLang] = useContext(LanguageContext);

  function filterByCat() {
    return filter === 0 ? image : image.filter((item) => item.src.includes(filter));
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
                        <img src={`assets/img/${pic.src}`} />
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
