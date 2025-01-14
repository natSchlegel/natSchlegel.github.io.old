import React from 'react';
import { useState } from 'react';
import Draggable from 'react-draggable';

const Education = ({ text }) => {
  
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible &&
        <Draggable>
          <div id="teste" className="text-box">
            <div className="text-menu">
              <div className="text-circles">
                <div className="circle-red" onClick={handleClick}></div>
                <div className="circle-yellow"></div>
                <div className="circle-green"></div>
              </div>
              <div className="text-menu-text">
                <div className="text-menu-title">{text.education.tab} </div>-
                <div className="text-menu-subtitle">edited</div>{" "}
              </div>
            </div>
            <div className="text-itself">
              <div>
                <div className="text-itself-title"> # {text.education.title} </div>
                <div className="text-itself-subtitle">
                  {text.education.subtitle}
                </div>
                <div className="text-itself-dates">{text.education.dates}</div>
                <div className="text-itself-text">{text.education.text}</div>
                <div className="text-itself-skills">
                  <div className="text-itself-skills-title">
                    {text.education.skills}:
                  </div>
                  <div className="text-itself-skills-text">
                    {text.education.skillsText}
                  </div>
                </div>
              </div>
              <span>-------------------------------------</span>
              {text.education.certifications && Object.keys(text.education.certifications).length > 0 ? (
                Object.keys(text.education.certifications).map((key) => {
                  const item = text.education.certifications[key];
                  return (
                    <div key={key}>
                      <div className="text-itself-title"> # {item.name} </div>
                      <div className="text-itself-dates">{item.company} · {item.date}</div>
                      <div className="text-itself-skills">
                        <div className="text-itself-skills-title">
                          {text.education.skills}:
                        </div>
                        <div className="text-itself-skills-text">
                          {item.skill}
                        </div>
                      </div>
                      <span>-------------------------------------</span>
                    </div>
                  );
                })
              ) : (
                <h2>Erro</h2>
              )}
            </div>
            <div className="text-footer">84 {text.education.words} · 629 {text.education.characters} · 22 {text.education.lines}</div>
          </div>
        </Draggable>
      }
    </>
  );
}

export default Education;
