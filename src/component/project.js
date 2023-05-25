import { useContext } from "react";
import styles from "../index.css";
import { BsFillPaletteFill, BsDisplay } from "react-icons/bs";
import { FaPencilRuler, FaChartArea, FaBullhorn } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { DataContext, LanguageContext } from "../App";
import { Fragment } from "react";

const logo = [
  { logo: <BsFillPaletteFill className="logos" /> },
  { logo: <BsDisplay className="logos" /> },
  { logo: <FaPencilRuler className="logos" /> },
  { logo: <HiPaintBrush className="logos" /> },
  { logo: <FaChartArea className="logos" /> },
  { logo: <FaBullhorn className="logos" /> },
];

function Projects() {
  const value = useContext(DataContext);
  const project = value.data
  const [lang, setLang] = useContext(LanguageContext);

  return (
    <section className="bgGray" id="experience">
      <div className="whatBtn mr5 mrp5 wd80">
      {
        project && project.length>0 ? 
        <div className="wd80 mrp5">{
           project.filter((item)=>  item.name=="projectFirst")
           .map((item)=><p>{item[lang]}</p>)

        } {
          project.filter((item)=>  item.name=="projectTitle")
          .map((item)=> <h1>{item[lang]}</h1>)
        }
        
        </div>
        :""

      }
      {
         project && project.length>0 ? 
          <div className="course">
          <div className="design">
            {
                project.filter((item)=>item.name=="projectDesign" ||item.name=="projectWebDesign" 
                ||item.name=="projectUxDesign" ||item.name=="projectAppDev" 
                ||item.name=="projectBusAnalysis" ||item.name=="projectSeoMark" )
                .map((item,i)=>
                 <div className="txtCenter">
                 <div>{logo[i].logo}</div>
                  <h2>{item[lang]}</h2>
                  </div>
                )
            }
          </div>
        </div>
        :""
      }
      </div>
    </section>
  );
}

export default Projects;
