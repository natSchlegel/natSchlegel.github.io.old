import React from "react";
import uk from "../assets/uk.svg";
import brazil from "../assets/brazil.svg";
import germany from "../assets/germany.svg";

const Curriculo = ({ showProjects, handleLanguageChange, text, toggleEducationVisibility,toggleExperienceVisibility }) => {
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
          <span className="titulo-interior" />
          <div className="textLanguages">
            <img src={germany} className="flag" onClick={() => handleLanguageChange("german")} alt="DE"/>
            <img src={brazil} className="flag" onClick={() => handleLanguageChange("portuguese")} alt="PT"/>
           <img src={uk} className="flag" onClick={() => handleLanguageChange("english")} alt="EN"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculo;
