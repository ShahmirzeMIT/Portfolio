import { useContext } from "react";
import styles from "../index.css";
import { BsFillPaletteFill, BsDisplay } from "react-icons/bs";
import { FaPencilRuler, FaChartArea, FaBullhorn } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { DataContext } from "../App";
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
  const project = value.project;
  const projectData = value.projectData;

  return (
    <section className="bgGray" id="experience">
      <div className="wd80 mrp5">
        <div className="whatBtn mr5 mrp5 wd80">
          {projectData.map((item, index) => (
            <Fragment key={index}>
              <p className="">{item.target}</p>
              <h1>{item.text}</h1>
            </Fragment>
          ))}
        </div>
        <div className="course">
          <div className="design">
            {project.map((item, index) => (
              <div className="txtCenter" key={index}>
                <div>{logo[index].logo}</div>
                <h2>{item.work}</h2>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
