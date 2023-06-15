import styles from '../index.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { DataContext, LanguageContext } from '../App';
import { Fragment } from 'react';

function Slider() {
  const value = useContext(DataContext);
  const [lang,setLang]=useContext(LanguageContext);
  const [data,setData]=useState([])
  const slide = value.data;

 useEffect(()=>{
  fetch("./assets/json/slide.json")
  .then((item)=>item.json())
  .then((item)=>setData(item.data))
 },[])
  return (
    <section className="grayS" id="slider">
     <div className='wd80Sl'>

      {
       slide &&  slide.length>0 && data?
        slide.filter((item)=>item.name=="Targetslide")
        .map((item)=><>               
        <h1 className='whiteS'  key={item.id}>{item[lang]}</h1> 
          </>)
          :""
      }
      <Carousel>
      {
        slide &&  slide.length>0 && data?
        data.map((item)=>
                <Carousel.Item >
                     <p className="wd50P">{slide.filter((itemText)=>itemText.name.startsWith("slideRef"))
                     .map((itemT)=>itemT.id==item.text?<>{itemT[lang]}</>:"")
                     }</p> 
                     <div className="littleImg"> 
                        <img src={"./assets/img/"+item.src} />
                     </div>
                     <p>{item.name}</p>
                     <p>{slide.filter((itemText)=>itemText.name.startsWith("slideWplace"))
                     .map((itemT)=>itemT.id==item.workplace?<>{itemT[lang]}</>:"")
                     }</p>
                 </Carousel.Item>
               
        ) :""
      }
      </Carousel>
     </div>
    </section>
  );
}

export default Slider;
