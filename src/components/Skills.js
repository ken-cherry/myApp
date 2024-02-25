import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <>
      <div className="content-divider"></div>
      <section className="skills-section section" id="skills">
        <div className="section-title">
          <h2>skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-container">
          {skills.map((item) => {
            const { id, img, text } = item;
            return (
              <div className="skill" key={id}>
                <div className="skill-icon hover-rotate">
                  <i className={img}></i>
                  <p className="skill-text">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
