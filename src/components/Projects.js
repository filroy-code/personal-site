import React from "react";
import soshPreview from "../resources/soshPreview.png";
import cvAppPreview from "../resources/cvApp.png";

export default function Projects() {
  return (
    <div id="projects">
      <div className="sectionHeading">Projects</div>
      <div className="soshProject">
        <div className="projectTextContainer">
          <div className="projectPreviewText">
            <div className="projectTitle">Sosh</div>
            <div className="projectSubheading">
              A full-stack social-media platform.
            </div>
            <p className="projectInfo">
              Modern functionality built with React, Node, Express, MongoDB,
              Framer-Motion, React-Flip-Toolkit, and AWS S3.
            </p>
          </div>
          <div></div>
          <p className="projectLink">Live App</p>
          <p className="projectLink">Learn More</p>
        </div>
        <div className="rightProjectContainer">
          <img
            className="projectPreview"
            src={soshPreview}
            alt="Sosh App Preview"
          ></img>
        </div>
      </div>
      <div className="cvAppProject">
        <div className="leftProjectContainer">
          <img
            className="projectPreview"
            src={cvAppPreview}
            alt="CV App Preview"
          ></img>
        </div>
        <div className="projectTextContainer">
          <div className="projectPreviewText">
            <div className="projectTitle">CV Generator</div>
            <div className="projectSubheading">
              A responsive resume generator webapp.
            </div>
            <p className="projectInfo">Built with React.</p>
          </div>
          <div></div>
          <p className="projectLink">Live App</p>
          <p className="projectLink">Learn More</p>
        </div>
      </div>
    </div>
  );
}
