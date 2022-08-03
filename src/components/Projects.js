import React from "react";
import soshPreview from "../resources/soshPreview.png";
import cvAppPreview from "../resources/cvApp.png";
import nbaAppPreview from "../resources/nbaAppPreview.png";
import { Button } from "@mui/material";

const Projects = React.forwardRef((props, ref) => {
  const buttonStyle = {
    backgroundColor: "rgb(236, 76, 76)",
    color: "white",
    border: "1px solid rgb(236, 76, 76)",
  };

  return (
    <div ref={ref} id="projects">
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
          <a href="https://sosh-media.netlify.app/">
            <Button style={buttonStyle} variant="contained">
              Live App
            </Button>
          </a>
          <a href="https://github.com/filroy-code">
            <Button style={buttonStyle} variant="contained">
              Learn More
            </Button>
          </a>
        </div>
        <a href="https://sosh-media.netlify.app/">
          <div className="rightProjectContainer">
            <img
              className="projectPreview"
              src={soshPreview}
              alt="Sosh App Preview"
            ></img>
          </div>
        </a>
      </div>
      <div className="cvAppProject">
        <a href="https://filroy-code.github.io/cv_app/">
          <div className="leftProjectContainer">
            <img
              className="projectPreview"
              src={cvAppPreview}
              alt="CV App Preview"
            ></img>
          </div>
        </a>
        <div className="projectTextContainer">
          <div className="projectPreviewText">
            <div className="projectTitle">CV Generator</div>
            <div className="projectSubheading">
              A responsive resume generator webapp.
            </div>
            <p className="projectInfo">Built with React.</p>
          </div>
          <div></div>
          <a href="https://filroy-code.github.io/cv_app/">
            <Button style={buttonStyle} variant="contained">
              Live App
            </Button>
          </a>
          <a href="https://github.com/filroy-code">
            <Button style={buttonStyle} variant="contained">
              Learn More
            </Button>
          </a>
        </div>
      </div>
      <div className="nbaProject">
        <div className="projectTextContainer">
          <div className="projectPreviewText">
            <div className="projectTitle">NBA Player Comparison Tool</div>
            <div className="projectSubheading">
              A data-visualization tool for comparison of NBA player stats.
            </div>
            <p className="projectInfo">Built with React and D3.js.</p>
          </div>
          <div></div>
          <a href="https://nba-pct.netlify.app/">
            <Button style={buttonStyle} variant="contained">
              Live App
            </Button>
          </a>
          <a href="https://github.com/filroy-code">
            <Button style={buttonStyle} variant="contained">
              Learn More
            </Button>
          </a>
        </div>
        <a href="https://nba-pct.netlify.app/">
          <div className="rightProjectContainer">
            <img
              className="projectPreview"
              src={nbaAppPreview}
              alt="NBA Play Comparison Tool Preview"
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
});

export default Projects;
