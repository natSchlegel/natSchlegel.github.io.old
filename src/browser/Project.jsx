import React from "react";
import Tags from "./Componentes/Tags";

const Project = ({ name, text, image, tools, link }) => {
  return (
    <div className="project-box">
      <div className="project-image">
        <a href={link} target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="project-text">
        <span>{text}</span>
        <div className="project-tags">
          {tools.map((item, index) => (
            <Tags key={index} ferramenta={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
