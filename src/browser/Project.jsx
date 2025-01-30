import React from "react";
import Tags from "./Componentes/Tags";
import { isMobile } from "react-device-detect";

const Project = ({ name, text, image, tools, link }) => {

  if (isMobile) {
    return (
    <div id="projects" className={"project-box-mobile"}>
      <div className={"project-image-mobile"}>
        <a href={link} target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className={"project-text-mobile"}>
        <span>{text}</span>
        <div className={"project-tags-mobile"}>
          {tools.map((item, index) => (
            <Tags key={index} ferramenta={item} />
          ))}
        </div>
      </div>
    </div>)}


  return (
    <div className={"project-box"}>
      <div className={"project-image"}>
        <a href={link} target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className={"project-text"}>
        <span>{text}</span>
        <div className={"project-tags"}>
          {tools.map((item, index) => (
            <Tags key={index} ferramenta={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
