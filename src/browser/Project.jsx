import React from "react";
import Tags from "./Componentes/Tags";
import { isMobile } from "react-device-detect";

const Project = ({ name, text, image, tools, link }) => {
  return (
    <div className={isMobile ? "project-box-mobile":"project-box"}>
      <div className={isMobile ? "project-image-mobile" : "project-image"}>
        <a href={link} target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className={isMobile ? "project-text-mobile": "project-text"}>
        <span>{text}</span>
        <div className={isMobile ? "project-tags-mobile" : "project-tags"}>
          {tools.map((item, index) => (
            <Tags key={index} ferramenta={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
