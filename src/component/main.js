import { DataContext, LanguageContext } from "../App";
import { useContext, useRef } from "react";
import styles from "../index.css";
import { Fragment } from "react";
import { AiOutlineUp } from 'react-icons/ai';
function Main() {
  const value = useContext(DataContext);
  const information = value.data
  const [lang, setLang] = useContext(LanguageContext);
  const elemup=useRef(null)
  const getCordinats=()=>{
    const elem=elemup.current
    if(elem){
      const { top, left, right, bottom } = elem.getBoundingClientRect();
      if(bottom>512.34375){
        elemup.className.add("exhibit")
      }
      
    }
  }
  return (
    <>
    <main id="know">
    {
  information && information.length > 0 ? (
    <div className="wd-90">
      <div className="aboutme">
        <p>
          {information
            .filter((item) => item.name.includes("mainMe"))
            .map((item) => item[lang])}
        </p>
      </div>
      <h1>
        {information
          .filter((item) => item.name.includes("mainKnow"))
          .map((item) => item[lang])}
      </h1>
      <div className="Know">
        <article>
          <h2>
            {information
              .filter((item) => item.name.includes("mainCall"))
              .map((item) => item[lang] +" ")}
            <span>   

              {information
                .filter((item) => item.name.includes("mainName"))
                .map((item) => item[lang])}
            </span>
          </h2>
          <p className="pt2">
            {information
              .filter((item) => item.name.includes("mainWork"))
              .map((item) => item[lang])}
          </p>
        </article>
        <article>
          <div>
            <p className="bgYellow"></p>
            2
          </div>

          <h2>
            <span style={{ fontWeight: 700 }}>
              {information
                .filter((item) => item.name.includes("mainYears"))
                .map((item) => item[lang])}{" "}
              {information
                .filter((item) => item.name.includes("mainExperience"))
                .map((item) => item[lang])}
            </span>{" "}
          </h2>
        </article>
      </div>
    </div>
  ) : null
} 
     {/* <div> <span ref={elemup}  className="pFixed"><AiOutlineUp/></span></div>
     <button onClick={getCordinats}>Get Element Coordinates</button> */}
      
      </main> 
    </>
  );
}

export default Main;
