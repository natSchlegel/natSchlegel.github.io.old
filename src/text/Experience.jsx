import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Experience = ({ text }) => {
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
                <div className="text-menu-title">experience</div>-
                <div className="text-menu-subtitle">edited</div>{" "}
              </div>
            </div>
            <div className="text-itself">
              <div>
                <span>-------------------------------------</span>
                {text.experience && Object.keys(text.experience).length > 0 ? (
                  Object.keys(text.experience).map((key) => {
                    const item = text.experience[key];
                    return (
                      <div key={key}>
                        <div className="text-itself-title"> # {item.job}</div>
                        <div className="text-itself-dates">{item.company} · {item.type}</div>
                        <div className="text-itself-dates">{item.period} · {item.duration}</div>
                        
                        <div className="text-itself-skills">
                          <div className="text-itself-skills-title">
                            Competences:
                          </div>
                          <div className="text-itself-skills-text">
                            {item.competences.join(', ')}
                          </div>
                        </div>
                        <span>-------------------------------------</span>
                      </div>
                    );
                  })
                ) : (
                  <h2>Error: No experience data available</h2>
                )}
              </div>
            </div>
            <div className="text-footer">
              84 {text.education.words} · 629 {text.education.characters} · 22 {text.education.lines}
            </div>
          </div>
        </Draggable>
      }
    </>
  );
}

export default Experience;
