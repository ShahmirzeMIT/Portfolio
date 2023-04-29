import Portfolio from "./component/portfolio";
import Projects from "./component/project";
import Resume from "./component/resume";
import Questions from "./component/question";
import Laptop from "./component/laptop";
import Contact from "./component/contact";
import Footer from "./component/footer"
import Slider from "./component/slider";
import Header from "./component/header";
import Main from "./component/main";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  
  const  [sent, setSent] = useState({});

      useEffect(()=>{
        fetch('./assets/myapp.json')
        .then(resp => resp.json())
        .then(txt => setSent(txt))
      },[])
    return (
      <>
          <Header menu={sent.headerMenu} />
          <Main information={sent.information}/>
          <Projects project={sent.project} />
          <Resume education={sent.education} experience={sent.experience} skill1={sent.skill1} skill2={sent.skill2}/>
          <Portfolio menu={sent.menu} image={sent.image }/>
          <Laptop/>
          <Questions questionMenu={sent.questionMenu} />
          <Slider slide={sent.slide}/>
          <Contact/>
          <Footer/>
      </>
    );
    }

    export default App;     