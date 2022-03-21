import React from "react";
import Project from "./Project";
import dogsImage from "../assets/screenshots/dogs.png";
import animalsImage from "../assets/screenshots/fantastic-animals.png";

const Projects = ({text}) => {
  const dogs = {
    name:"dogs",
    link:"https://natschlegel.github.io/dogs/",
    text: text.projects.dogs,
    image: dogsImage,
    tools: ["react", "css", "html","npm"],
  };

  const animals = {
    name: "Animais Fantásticos",
    link: "https://natschlegel.github.io/animais-fantasticos/",
    text: text.projects.fantasticAnimals,
    image: animalsImage,
    tools: ["javascript", "css", "html"],
  };

  return (
    <div className="project-boxes">
      <Project name={dogs.name} link={dogs.link} text={dogs.text} image={dogs.image} tools={dogs.tools} />
      <Project name={animals.name} link={animals.link} text={animals.text} image={animals.image} tools={animals.tools} />
    </div>
  );
};

export default Projects;
