import { useContext, useState } from "react";
import styles from "../index.css";
import Accordion from "./accordion";
import { DataContext, LanguageContext } from "../App";
import { Fragment } from "react";
import { useEffect } from "react";

function Questions() {
  const value = useContext(DataContext);
  const questionMenu = value.questionMenu;
  const question = value.data;
  const [lang, setLang] = useContext(LanguageContext);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("./assets/json/question.json")
      .then((item) => item.json())
      .then((item) => setData(item.data));
  }, []);

  return (
    <>
      <section id="question">
        <div>
          <div className="question">
            <div className="openQ">
              {question && question.length > 0 && data.length > 0 ? (
                <>
                  {question
                    .filter((item) => item.name === "slagFaq")
                    .map((item, i) => (
                      <div className="faq" key={`faq-${i}`}>
                        {item[lang]}
                      </div>
                    ))}
                  {question
                    .filter((item) => item.name === "faqTitile")
                    .map((item, i) => (
                      <p className="whatC" key={`faqTitile-${i}`}>
                        {item[lang]} ?
                      </p>
                    ))}
                  <div className="openQuestion">
                    <div className="opendiv">
                      {question
                        .filter((item) => item.name.includes("question"))
                        .map((item, i) => (
                          <Fragment key={`question-${i}`}>
                            {data
                              .filter(
                                (item1) =>
                                  item1.menu >= 61 &&
                                  item1.menu <= 65
                              )
                              .map((item2) =>
                                item2.menu === item.id ? (
                                  <Accordion
                                    key={`accordion-${item2.id}`}
                                    title={
                                      question
                                        .filter((item) =>
                                          item.name.includes("questionMenu")
                                        )
                                        .map((item) =>
                                          item2.menu === item.id ? (
                                            <Fragment key={`title-${item.id}`}>
                                              {item[lang]}
                                            </Fragment>
                                          ) : null
                                        )
                                    }
                                  >
                                    {question
                                      .filter((item) =>
                                        item.name.includes("questionText")
                                      )
                                      .map((item3) =>
                                        item3.id === item2.text ? (
                                          <Fragment key={`content-${item3.id}`}>
                                            {item3[lang]}
                                          </Fragment>
                                        ) : null
                                      )}
                                  </Accordion>
                                ) : null
                              )}
                          </Fragment>
                        ))}
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="light wdim100">
              <img src={"assets/img/faq.png"} alt="FAQ" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Questions;
