import { useContext, useEffect, useState } from "react";
import styles from "../index.css";
import { DataContext, LanguageContext } from "../App";
import { Fragment } from "react";

function Resume() {
  const value = useContext(DataContext);
  const education = value.data;
  const [lang, setLang] = useContext(LanguageContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./assets/json/skill.json")
      .then((item) => item.json())
      .then((item) => setData(item.data));
  }, []);

  return (
    <>
      <section id="works">
        {education && education.length > 0 ? (
          <>
            {education
              .filter((item) => item.name.includes("resume") && item.id === 90)
              .map((item, index) => (
                <div className="resume" key={index}>
                  {item[lang]}
                </div>
              ))}
            {education
              .filter((item) => item.name.includes("resume") && item.id === 42)
              .map((item, index) => (
                <h1 key={index}>{item[lang]}</h1>
              ))}
          </>
        ) : (
          ""
        )}

        <div className="wd80 pt5 d-flex2">
          <>
            {education && education.length > 0 ? (
              <div className="about">
                <div className="eductaion">
                  {education
                    .filter((item) => item.name.includes("myEducation"))
                    .map((item, index) => (
                      <Fragment key={index}>
                        <h2 className="headtext">{item[lang]}</h2>
                      </Fragment>
                    ))}

                  <div className="borderYellow">
                    <Fragment>
                      <div className="study">
                        {education
                          .filter(
                            (item) =>
                              item.name === "eduName" ||
                              item.name === "eduSpecialty" ||
                              item.name === "eduStudyYear" ||
                              item.name === "eduCompany" ||
                              item.name === "eduCourse" ||
                              item.name === "eduCourseYear" ||
                              item.name === "eduJed" ||
                              item.name === "eduJedCourse" ||
                              item.name === "eduJedYear" ||
                              item.name === "eduEnglish" ||
                              item.name === "eduEnglishGeneral" ||
                              item.name === "eduEnglishYear"
                          )
                          .map((item, index) => (
                            <Fragment key={index}>
                              {item.name === "eduName" ||
                              item.name === "eduCompany" ||
                              item.name === "eduJed" ||
                              item.name === "eduEnglish" ? (
                                <h3 className="head">{item[lang]}</h3>
                              ) : (
                                ""
                              )}
                              {item.name === "eduSpecialty" ||
                              item.name === "eduCourse" ||
                              item.name === "eduJedCourse" ||
                              item.name === "eduEnglishGeneral" ? (
                                <p className="head">{item[lang]}</p>
                              ) : (
                                ""
                              )}
                              {item.name === "eduStudyYear" ||
                              item.name === "eduCourseYear" ||
                              item.name === "eduJedYear" ||
                              item.name === "eduEnglishYear" ? (
                                <>
                                  <p className="head">{item[lang]}</p>
                                  <hr />
                                </>
                              ) : (
                                ""
                              )}
                            </Fragment>
                          ))}
                      </div>
                    </Fragment>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {education && education.length > 0 ? (
              <div className="about">
                <div className="experience">
                  {education
                    .filter((item) => item.name.includes("myExperience"))
                    .map((item, index) => (
                      <Fragment key={index}>
                        <h2 className="headtext">{item[lang]}</h2>
                      </Fragment>
                    ))}

                  <div className="borderYellow">
                    <Fragment>
                      <div className="study">
                        {education
                          .filter((item) =>
                            ["eduCompanyName", "eduPosition", "eduPosYear1","eduCompanyName2", "eduPosition2", "eduPosYear2"].includes(
                              item.name
                            )
                          )
                          .map((item, index) => (
                            <Fragment key={index}>
                              {item.name === "eduCompanyName" || item.name === "eduCompanyName2" ? (
                                <h3 className="head">{item[lang]}</h3>
                              ) : (
                                ""
                              )}
                              {item.name === "eduPosition" || item.name === "eduPosition2" ? (
                                <p className="head">{item[lang]}</p>
                              ) : (
                                ""
                              )}
                              {item.name === "eduPosYear1"|| item.name === "eduPosYear2" ? (
                                <>
                                  <p className="head">{item[lang]}</p>
                                  <hr />
                                </>
                              ) : (
                                ""
                              )}
                            </ Fragment>
                          ))}
                      </div>
                    </Fragment>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="wd100">
              {education && education.length > 0 && data.length > 0 ? (
                <div className="experience mrau">
                  {education
                    .filter((item) => item.name === "mySkill")
                    .map((item, index) => (
                      <h2 className="headtext " key={index}>
                        {item[lang]}
                      </h2>
                    ))}
                </div>
              ) : (
                ""
              )}

              <div className="skill">
              <div className="experience">
            {
              education && education.length >0  && data.length>0  ?<>
              {
                education.filter((item)=>item.id==46 || item.id==47 || item.id==48 || item.id==103 || item.id==110)
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
                            className={`wd${item2.percent} h6 yellow`}
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
                education.filter((item)=>item.id==49 || item.id==50 || item.id==51 || item.id==104 || item.id==111)
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
                            className={`wd${item2.percent} h6 yellow`}
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
              {education && education.length > 0 && data.length > 0 ? (
                <>
                  {education
                    .filter((item) => item.name === "resuDownload")
                    .map((item, index) => (
                      <div className="download" key={index}>
                        <a href="assets/cv/cv.pdf" download>
                          {item[lang]}
                        </a>
                      </div>
                    ))}
                </>
              ) : (
                ""
              )}
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default Resume;
