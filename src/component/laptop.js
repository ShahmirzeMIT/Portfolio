import { useContext, useEffect } from "react";
import styles from "../index.css";
import { DataContext, LanguageContext } from "../App";
import axios from "axios";
import { Fragment } from "react";
import { useState } from "react";

function Laptop() {
  const value = useContext(DataContext);
  const laptop = value.data;

  const [lang, setLang] = useContext(LanguageContext);

  return (
    <>
      <section className="psR">
        <div className="lapimg">
          <img src={"./assets/img/laptop.jpg"} />
        </div>
        <div className="shadow"></div>

          {
          laptop && laptop.length>0 ?
           <div className="word">
            
              <div >
                <h1 className="white">
                  {laptop.filter((item)=>item.name=="hireTitile")
                .map((item,i)=><div key={i}>{item[lang]}?</div>)
                }</h1>
                <div className="btn1" >
                  <button>{laptop.filter((item)=>item.name=="hireButton")
                .map((item,i)=>< a className="hire" href="#contact" key={i}>{item[lang]}!</a>)
                }</button>
                </div>
              </div>
           
          </div> 
          :""}
      </section>
    </>
  );
}

export default Laptop;
