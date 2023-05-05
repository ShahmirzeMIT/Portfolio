  import Portfolio from "./component/portfolio";
  import Projects from "./component/project";
  import Resume from "./component/resume";
  import Questions from "./component/question";
  import Laptop from "./component/laptop";
  import Contact from "./component/contact";
  import Footer from "./component/footer"
  import Slider from "./component/slider";
  import { Header } from "./component/header";
  import Main from "./component/main";
  import {  useEffect } from "react";
  import { useState } from "react";
import { createContext } from "react";
import Check from "./component/check";

export const LanguageContext=createContext()
export const DataContext=createContext()

  export const App=()=> {
    const [lang, setLang] = useState("en");
    const  [sent, setSent] = useState(
      { "header":[],
        "mainMenu":[],
        "headerMenu":[],
        "information":[],
        "projectData":[],
        "project":[],
        "portfolio":[],
        "menu":[],
        "image":[],
        "laptop":[],
        "question":[],
        "questionMenu":[],
        "sliderTarget":[],
        "slide":[],
        "resume":[],
        "education":[],
        "experience":[],
        "skill1":[],
        "skill2":[],
        "contact1":[],
        "contact2":[]
      }
    );
    useEffect(()=>{
          fetch(`./assets/json/${lang}/myapp.json`)
          .then(resp => resp.json())
          .then(txt => setSent(txt))
        },[lang])
      
        const LanguageChange = (language) => {
          setLang(language);
        };
      return (
        <LanguageContext.Provider value={[lang,LanguageChange]}>
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
            </LanguageContext.Provider>
        );
      }

      export default App;     