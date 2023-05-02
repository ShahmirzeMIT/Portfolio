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
import {  useEffect } from "react";
import { useState } from "react";
import { createContext} from "react";


export const DataContext=createContext()

function App() {
  const  [sent, setSent] = useState(
    {
      "headerMenu":[],
      "information":[],
      "project":[],
      "menu":[],
      "image":[],
      "questionMenu":[],
      "slide":[],
      "education":[],
      "skill1":[],
      "skill2":[]
    }
  );
      useEffect(()=>{
        fetch('./assets/json/myapp.json')
        .then(resp => resp.json())
        .then(txt => setSent(txt))
      },[])

    return (
        <DataContext.Provider value={sent}>
            <Header/>
            <Main/>
            <Projects/>
            <Resume/>
            <Portfolio/>
            <Laptop/>
            <Questions/>
            <Slider/>
            <Contact/>
            <Footer/>
          </DataContext.Provider>
      );
    }

    export default App;     