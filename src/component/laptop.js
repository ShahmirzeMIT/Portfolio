import { useContext, useEffect } from "react";
import styles from "../index.css";
import { DataContext } from "../App";
import axios from "axios";
import { Fragment } from "react";
import { useState } from "react";

function Laptop() {
  const value = useContext(DataContext);
  const laptop = value.laptop;
  const [data, setData] = useState([]);

  useEffect(() => {	
	   fetch('http://localhost/portfolio/getTranslation.php')
	  .then(response=>{response.json()})
	  .then((data)=>{
		console.log(data)
	  })
  }, []);

  return (
    <>
      <section className="psR">
        <div className="lapimg">
          <img src={"/assets/img/laptop.jpg"} />
        </div>
        <div className="shadow"></div>
        <div className="word">
          {laptop.map((item, index) => (
            <Fragment key={index}>
              <h1 className="white">{item.target}</h1>
              <div className="btn1">
                <button>{item.hire}!</button>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default Laptop;
