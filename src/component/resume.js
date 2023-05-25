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
                                                      <p className="head">{item[lang]}</p>
                                                    :""
                                                    }
                                                    {
                                                      item.name=="eduStudyYear"  || item.name=="eduCourseYear"
                                                      || item.name=="eduJedYear" || item.name=="eduEnglishYear"?<>
                                                      <p className="head">{item[lang]}</p><hr />
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
                                                      <p className="head">{item[lang]}</p>
                                                    :""
                                                    }
                                                    {
                                                      item.name=="eduPosYear1" ?<>
                                                      <p className="head">{item[lang]}</p><hr />
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
            </>
              
         {/* 
            <div className="experience">
              {resume.map((item, index) => (
                <Fragment key={index}>
                  <h2 className="headtext">{item.experience}</h2>
                </Fragment>
              ))}
              <div className="borderYellow">
                {experience.map((item, i) => (
                  <Fragment key={i}>
                    <div className="study">
                      <h3 className="head">{item.workName}</h3>
                      <p className="txt">{item.year}</p>
                      <p className="txt">{item.text}</p>
                    </div>
                    <hr />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>

              {resume.map((item, index) => (
                <Fragment key={index}>
                  <h2 className="headtext">{item.skill}</h2>
                </Fragment>
              ))}
              <div className="skill">
                <div className="eductaion">
                  {skill1.map((item, i) => (
                    <Fragment key={i}>
                      <div className="mr1">
                        <div className="d-flex">
                          <p className="font">{item.know}</p>
                          <p>{item.percent}%</p>
                        </div>
                        <div className="yellowLine mr1">
                          <div
                            className={`wd${item.percent} h6`}
                            key={i}
                          ></div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="experience">
                  {skill2.map((item, i) => (
                    <Fragment key={i}>
                      <div className="mr1">
                        <div className="d-flex">
                          <p className="font">{item.know}</p>
                          <p>{item.percent}%</p>
                        </div>
                        <div className="yellowLine mr1">
                          <div
                            className={`wd${item.percent} h6`}
                            key={i}
                          ></div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="tcenter">
            {resume.map((item, index) => (
              <Fragment key={index}>
                <div className="download">
                  <a href="assets/cv/cv.pdf" download>
                    {item.download}
                  </a>
                </div>
              </Fragment>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Resume;
