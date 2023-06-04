import styles from '../index.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { DataContext, LanguageContext } from '../App';
import { Fragment } from 'react';

function Slider() {
  const value = useContext(DataContext);
  const slide = value.slide;
  const [lang,setLang]=useContext(LanguageContext);
  const [data,setData]=useState([])
  const sliderTarget = value.data;

  useEffect(()=>{
    fetch('./assets/json/slide.json')
    .then((data)=>data.json())
    .then((data)=>setData(data.data))
  },[])
  return (
    <section className="grayS" id="slider">
      <div className="wd80Sl">
        {
          sliderTarget && sliderTarget.length>0 && data.length>0 ?
            <> 
            <div className="client">
              <div>{sliderTarget.filter((item)=>item.name=="slideTitle")
              .map((item,i)=><span key={i}>{item[lang]}</span>)
              }</div>
            </div>
            <h1 className="whiteS">{
              sliderTarget.filter((item)=>item.name=="slidetTarget")
              .map((item,i)=><span key={i}>{item[lang]}</span>)
            }</h1>

            <Carousel>
             {
              sliderTarget.filter((item)=>item.name=="slide")
              .map((item,i)=>
                 <Carousel.Item key={i}>
                  <p className="wd50P">{}</p>
                 {/*  <div className="littleImg">
                    <img src={"assets/img/" + item.src} />
                  </div>
                  <p>{item.fullName}</p>
                  <p>{item.workPlace}</p> */}
                </Carousel.Item>
              
              )
             }
              

              {/* {slide.map((item, i) => (
                
              ))} */}
            </Carousel>
            </>
          :""
        }
       
      </div>
    </section>
  );
}

export default Slider;
