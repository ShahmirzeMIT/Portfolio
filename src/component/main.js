import { DataContext, LanguageContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "../index.css";
import { Fragment } from "react";
import { AiOutlineUp } from 'react-icons/ai';
function Main() {
  const value = useContext(DataContext);
  const information = value.data
  const [lang, setLang] = useContext(LanguageContext);
  const elemup=useRef(null)
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 40|| document.documentElement.scrollTop > 40) {
      elemup.current.style.display = "block";
    } else {
      elemup.current.style.display = "none";
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
     <div> <div ref={elemup}  className="pFixed" > <a href="#home"><AiOutlineUp/></a></div></div>
      
      </main> 
    </>
  );
}

export default Main;
