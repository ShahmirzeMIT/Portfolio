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
import Modals from "./component/modal";

export const LanguageContext=createContext()
export const DataContext=createContext()

  export const App=()=> {
    const [lang, setLang] = useState("en");
    const  [sent, setSent] = useState({
      id:"",
      name:"",
      az:"",
      en:"",
      ru:""
    });
    useEffect(() => {
      fetch(`./assets/json/translation.json`)
        .then(resp => resp.json())
        .then(txt => setSent(txt))
    }, []);
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
            </DataContext.Provider>
            </LanguageContext.Provider>
        );
      }

      export default App;     