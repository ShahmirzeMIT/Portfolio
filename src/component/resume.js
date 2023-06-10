import { useContext } from "react";
import styles from "../index.css";
import { DataContext, LanguageContext } from "../App";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Resume() {
  const value = useContext(DataContext);
  const education = value.data;
  const [lang, setLang] = useContext(LanguageContext);
  const [data,setData]=useState([])
 useEffect(()=>{
  fetch("./assets/json/skill.json")
  .then((item)=>item.json())
  .then((item)=>setData(item.data))
 },[])
  return (
    <>
      <section id="works">
          {
              education && education.length>0 ?  
              <>{
                education.filter((item)=>item.name.includes("resume") && item.id==90)
                .map((item)=><div className="resume">{item[lang]}</div>)
              }
              {
                education.filter((item)=>item.name.includes("resume") && item.id==42)
                .map((item)=> <h1>{item[lang]}</h1>)
              }
              </>
                
                
              :""
            }
        <div className="wd80 pt5 d-flex2">
           
          <>
            {  education && education.length>0 ?
                  <div className="about">
                    <div className="eductaion">{
                      education.filter((item)=>item.name.includes("myEducation"))
                      .map((item)=><Fragment >
                      <h2 className="headtext">{item[lang]}</h2>
                    </Fragment>)
                    }
                    <div className="borderYellow">
                          <Fragment >
                            
                          <div className="study">  {
                                        education.filter((item)=>item.name=="eduName" ||
                                         item.name=="eduSpecialty" || item.name=="eduStudyYear" || item.name=="eduCompany"
                                         || item.name=="eduCourse"
                                         || item.name=="eduCourseYear"   || item.name=="eduJed" 
                                         || item.name=="eduJedCourse"  || item.name=="eduJedYear" 
                                         || item.name=="eduEnglish" || item.name=="eduEnglishGeneral"  
                                         || item.name=="eduEnglishYear")
                                        .map((item)=>
                                              <>
                                              { item.name=="eduName" || item.name=="eduCompany"
                                               || item.name=="eduJed" || item.name=="eduEnglish"?
                                                    <h3 className="head">{item[lang]}</h3>
                                                    :""
                                                    }
                                                    {
                                                      item.name=="eduSpecialty" || item.name=="eduCourse" 
                                                      || item.name=="eduJedCourse"|| item.name=="eduEnglishGeneral"   ?
                                                      <p className="resumep">{item[lang]}</p>
                                                    :""
                                                    }
                                                    {
                                                      item.name=="eduStudyYear"  || item.name=="eduCourseYear"
                                                      || item.name=="eduJedYear" || item.name=="eduEnglishYear"?<>
                                                      <p className="resumep">{item[lang]}</p><hr />
                                                      </>
                                                  
                                                    :""
                                                    }
                                              </>
                                             )

                                      }
                                    </div>
                        </Fragment>
                      </div>
                    </div>
                    </div>
                    :"  "
            }
            
            { education && education.length>0 ?
                  <div className="about">
                    <div className="experience">{
                      education.filter((item)=>item.name.includes("myExperience"))
                      .map((item)=><Fragment >
                      <h2 className="headtext">{item[lang]}</h2>
                    </Fragment>)
                    }
                    <div className="borderYellow">
                          <Fragment >
                            
                          <div className="study">  {
                                        education.filter((item)=>item.name=="eduCompanyName" ||
                                         item.name=="eduPosition" || item.name=="eduPosYear1" )
                                        .map((item)=>
                                              <>
                                              { item.name=="eduCompanyName" ?
                                                    <h3 className="head">{item[lang]}</h3>
                                                    :""
                                                    }
                                                    {
                                                      item.name=="eduPosition"    ?
                                                      <p className="resumep">{item[lang]}</p>
                                                    :""
                                                    }
                                                    {
                                                      item.name=="eduPosYear1" ?<>
                                                      <p className="resumep">{item[lang]}</p><hr />
                                                      </>
                                                  
                                                    :""
                                                    }
                                              </>
                                             )

                                      }
                                    </div>
                        </Fragment>
                      </div>
                    </div>
                    </div>
                    :"  "
            }
          
          <div className="wd100">
            <div className="skill2">
                 {
                      education && education.length >0  && data.length>0 ?<>
                      {
                        education.filter((item)=>item.name=="mySkill")
                        .map((item)=><h2 className="headtext">{item[lang]}</h2>)
                      }
                    </>:""
                  }
            </div>
              
            <div className="skill">
             <div className="experience">
            {
              education && education.length >0  && data.length>0  ?<>
              {
                education.filter((item)=>item.id==46 || item.id==47 || item.id==48)
                .map((item)=>
                 data.map((item2,i)=>
                item.id==item2.name?
                      <div className="mr1">
                        <div className="d-flex">
                          <p className="font">{item[lang]}</p>
                          <p>{item2.percent}%</p>
                        </div>
                        <div className="yellowLine mr1">
                          <div
                            className={`wd${item2.percent} h6`}
                          ></div>
                        </div>
                      </div>
                :""
                )
                )
              }
            </>:""
            }
            </div>
            <div className="experience">
            {
              education && education.length >0  && data.length>0  ?<>
              {
                education.filter((item)=>item.id==49 || item.id==50 || item.id==51)
                .map((item)=>
                 data.map((item2,i)=>
                item.id==item2.name?
                      <div className="mr1">
                        <div className="d-flex">
                          <p className="font">{item[lang]}</p>
                          <p>{item2.percent}%</p>
                        </div>
                        <div className="yellowLine mr1">
                          <div
                            className={`wd${item2.percent} h6`}
                          ></div>
                        </div>
                      </div>
                :""
                )
                )
              }
              
            </>:""
            }
            </div>
            </div>
            {
                education && education.length >0  && data.length>0 ?<>
                {
                  education.filter((item)=>item.name=="resuDownload")
                  .map((item)=>
                   <div className="download">
                  <a href="assets/cv/cv.pdf" download>
                    {item[lang]}
                  </a>
                </div>
                )
                }
              </>:""
            }
            </div>
            </>
        </div>
      </section>
    </>
  );
}

export default Resume;
