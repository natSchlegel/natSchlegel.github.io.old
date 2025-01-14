import React, { useState } from "react";
import "./App.css";
import Curriculo from "./browser/curriculo";
import Projects from "./browser/Projects";
import Text from "./Text";
import Education from "./text/Education";

import arrowForwardIos from "./assets/arrow_forward_ios.svg";
import arrowBackIos from "./assets/arrow_back_ios.svg";
import refresh from "./assets/refresh.svg";
import Draggable from "react-draggable";
import Experience from "./text/Experience";

function App() {
  const [curriculoVisivel, setCurriculoVisivel] = useState(true);
  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  const text = Text[currentLanguage];

  const showCurriculo = () => setCurriculoVisivel(true);
  const showProjects = () => setCurriculoVisivel(false);
  const toggleEducationVisibility = () => setEducationVisible(!educationVisible);
  const toggleExperienceVisibility = () => setExperienceVisible(!educationVisible);

  return (
    <>
      <div className="container">
        <Draggable>
        <div className="container-big">
          <div className="container-big-div">
            <div className="container-big-div-div">
              <div className="container-big-div-div-circles-div">
                <div className="circle-red"></div>
                <div className="circle-yellow"></div>
                <div className="circle-green"></div>
              </div>
              <div
                className={`tab-1 ${
                  curriculoVisivel ? "active-tab" : "inactive-tab"
                }`}
                onClick={showCurriculo}
              >
                {text.tabs.resume}
              </div>
              <div
                className={`tab-2 ${
                  !curriculoVisivel ? "active-tab" : "inactive-tab"
                }`}
                onClick={showProjects}
              >
                {text.tabs.projects}
              </div>
            </div>
            <div className="url-div">
              <div className="url-div-div">
                <img src={arrowBackIos} alt="Back" />
                <img src={arrowForwardIos} alt="Forward" />
                <img src={refresh} alt="Refresh" />
                <span className="url-text">
                  {curriculoVisivel
                    ? "https://natschlegel.github.io/curriculo"
                    : "https://natschlegel.github.io/projects"}
                </span>
              </div>
            </div>
          </div>
          <div className="teste-2">
            {curriculoVisivel ? (
              <Curriculo
                showProjects={showProjects}
                handleLanguageChange={handleLanguageChange}
                text={text}
                toggleEducationVisibility={toggleEducationVisibility}
                toggleExperienceVisibility ={toggleExperienceVisibility}
              />
            ) : (
              <Projects text={text} />
            )}
          </div>
        </div>
        </Draggable>

        {experienceVisible && <Experience text={text} />}
        {educationVisible && <Education text={text}/>}
      </div>
    </>
  );
}

export default App;
