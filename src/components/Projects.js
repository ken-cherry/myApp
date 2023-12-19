import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <>
      <div className="content-divider"></div>
      <section className="projects" id="projects">
        <div className="projects-title">
          <h2>projects</h2>
          <div className="underline"></div>
        </div>
        <div className="project-center">
          {/* <!-- projects small screen go here --> */}
        </div>
        <div className="projects-container">
          {projects.map((item) => {
            const { id, img, imgAlt, title, logo, text, link, logoAlt } = item;
            return (
              <div className="card" key={id}>
                <div className="card-side card-front">
                  <img src={img} alt={imgAlt} className="img-link" />
                  <h4>{title} </h4>
                  <div className="card-icon">
                    {/* <i className={logo}></i> */}
                    <img src={logo} className="icon" alt={logoAlt} />
                  </div>
                </div>
                <div className="card-side card-back">
                  <p>{text} </p>
                  <a href={link} target="_blank" rel="noreferrer">
                    <button className="btn btn-card">visit site</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
