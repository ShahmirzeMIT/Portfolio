// import { useContext } from "react";
// import styles from "../index.css";
// import { DataContext } from "../App";
// import { Fragment } from "react";
// function Main() {
// const value=useContext(DataContext)
// const information=value.information
// const mainMenu=value.mainMenu
// 	return(

// 		<>
// 		<main id="know">
// 		<div className="wd-80">
// 			{
// 				mainMenu.map((item,index)=>
// 				<>
//           <Fragment key={index}>
// 				<div className="aboutme ">
// 				<p>{item.aboutMe}</p>
// 		</div>
// 			<h1>{item.know}</h1>
// 			<div className="Know">
// 				<article>
// 					<h2>{item.call} <span>{item.name}</span></h2>
// 					<p className="pt2">
// 						{item.work}
// 					</p>
// 				</article>
// 				<article>
// 						<div>2<p className="bgYellow"></p></div>
// 						<h2>{item.years} <span style={{fontWeight:700}}>{item.experience}</span> </h2>
// 				</article>
// 			</div>
//       </Fragment>
// 			</>)
// 			}
			
// 			<div className="Elaqe">
// 				<div className="nameEm wd-600 mr-auto" >
// 					{
// 						information.map((item,i)=> i===0 ||i===1 ?  <div className="mr-auto600" key={i}><p>{item.target}</p> <p className="bold">{item.inf}</p>  </div>:"")
// 					}
// 				</div>
// 				<div className="nameEm wd-400 mr-auto" >
// 					{
// 						information.map((item,i)=> i===2 ||i===3 ?  <div className="mr-auto600" key={i}><p>{item.target}</p> <p className="bold">{item.inf}</p>  </div>:"")
// 					}
// 				</div>
// 			</div>
// 		 </div>
// 		</main>
// 		</>
// 	)
// }

// export default Main
import { useContext } from "react";
import styles from "../index.css";
import { DataContext } from "../App";
import { Fragment } from "react";

function Main() {
  const value = useContext(DataContext);
  const information = value.information;
  const mainMenu = value.mainMenu;

  return (
    <>
      <main id="know">
        <div className="wd-80">
          {mainMenu.map((item, index) => (
            <Fragment key={index}>
              <div className="aboutme">
                <p>{item.aboutMe}</p>
              </div>
              <h1>{item.know}</h1>
              <div className="Know">
                <article>
                  <h2>
                    {item.call} <span>{item.name}</span>
                  </h2>
                  <p className="pt2">{item.work}</p>
                </article>
                <article>
                  <div>2<p className="bgYellow"></p></div>
      						<h2>{item.years} <span style={{fontWeight:700}}>{item.experience}</span> </h2>
                </article>
              </div>
            </Fragment>
          ))}
          <div className="Elaqe">
            <div className="nameEm wd-600 mr-auto">
              {information.map((item, i) =>
                i === 0 || i === 1 ? (
                  <div className="mr-auto600" key={i}>
                    <p>{item.target}</p> <p className="bold">{item.inf}</p>
                  </div>
                ) : null
              )}
            </div>
            <div className="nameEm wd-400 mr-auto">
              {information.map((item, i) =>
                i === 2 || i === 3 ? (
                  <div className="mr-auto600" key={i}>
                    <p>{item.target}</p> <p className="bold">{item.inf}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
