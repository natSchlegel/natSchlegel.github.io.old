import React from "react";
import uk from "../assets/uk.svg";
import brazil from "../assets/brazil.svg";
import germany from "../assets/germany.svg";
import hireDE from "../assets/hirede.svg";
import hireEN from "../assets/hireen.svg";
import { isBrowser, isMobile } from 'react-device-detect';
import hirePT from "../assets/hirept.svg";

const Curriculo = ({ showProjects, handleLanguageChange, text, toggleEducationVisibility, toggleExperienceVisibility, currentLanguage }) => {
  const hireImage = () => {
    if (currentLanguage === "german") return hireDE;
    if (currentLanguage === "portuguese") return hirePT;
    return hireEN;
  };

  console.log(text);

  if (isMobile) {

    return (
      <>
      <div className="mobile">
        <div className="boxMobile">
          <div className="subtitleMobile">Hello World</div>
          <div className="textMobile">
          <span>{text.bio}</span>

          </div>
          <div className="buttonMobile">
            <button>{text.buttons.portfolio}</button>
            <button>{text.buttons.experience}</button>
            <button>{text.buttons.education}</button>
          </div>
          <div className="textLanguagesMobile">
          <img src={germany} className="flag" onClick={() => handleLanguageChange("german")} alt="DE" />
            <img src={brazil} className="flag" onClick={() => handleLanguageChange("portuguese")} alt="PT" />
            <img src={uk} className="flag" onClick={() => handleLanguageChange("english")} alt="EN" />
          </div>
        </div>
        <div className="boxMobile">
        <div className="subtitleMobile">Project</div>
        </div>
        </div>
        {/* <div className="project">
          <div className="project-box-mobile">
            <div className="project-image">
              <a href="{link}" target="_blank">
                <img src="./assets/dogs.png" alt="{name}" />
              </a>
            </div>
            <span
            >Dogs is a social network where users can upload photos of their dogs,
              like and comment on others' pictures. It's a simple platform to share
              pet images and interact with others.</span
            >
          </div>
          <div className="project-box-mobile">
            <div className="project-image">
              <a href="{link}" target="_blank">
                <img src="./assets/dogs.png" alt="{name}" />
              </a>
            </div>
            <span
            >Dogs is a social network where users can upload photos of their dogs,
              like and comment on others' pictures. It's a simple platform to share
              pet images and interact with others.</span
            >
          </div>
          <div className="project-box-mobile">
            <div className="project-image">
              <a href="{link}" target="_blank">
                <img src="./assets/dogs.png" alt="{name}" />
              </a>
            </div>
            <span
            >Dogs is a social network where users can upload photos of their dogs,
              like and comment on others' pictures. It's a simple platform to share
              pet images and interact with others.</span
            >
          </div>
        </div> */}
      </>
    );
  }

  return (
    <>

      <div className="teste-3">
        <div className="boxright">
          <span className="subtitle">Hello World</span>
          <p className="text">
            {text.bio}
          </p>
          <div className="buttons">
            <button onClick={showProjects}>{text.buttons.portfolio}</button>
            <button onClick={toggleExperienceVisibility}>{text.buttons.experience}</button>
            <button onClick={toggleEducationVisibility}>{text.buttons.education}</button>
          </div>
        </div>

        <div className="divEsquerda">
          <span className="titulo-interior"><a href="https://www.linkedin.com/in/natascha-schlegel/" target="_blank"><img src={hireImage()} className="hireMe" /></a></span>

          <div className="textLanguages">
            <img src={germany} className="flag" onClick={() => handleLanguageChange("german")} alt="DE" />
            <img src={brazil} className="flag" onClick={() => handleLanguageChange("portuguese")} alt="PT" />
            <img src={uk} className="flag" onClick={() => handleLanguageChange("english")} alt="EN" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculo;
