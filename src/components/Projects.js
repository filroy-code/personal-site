import React from "react";
import soshPreview from "../resources/soshPreview.png";
import cvAppPreview from "../resources/cvApp.png";
import nbaAppPreview from "../resources/nbaAppPreview.png";
import classSpacePreview from "../resources/classSpacePreview.png";
import { ActionButton } from "./ActionButton";

const Projects = React.forwardRef((props, ref) => {
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
              Built with React, Node, Express, MongoDB, Framer-Motion,
              React-Flip-Toolkit, and AWS S3.
            </p>
          </div>

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open("https://sosh-media.netlify.app/", "_blank");
            }}
          >
            <a
              href="https://sosh-media.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live App
            </a>
          </ActionButton>

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open(
                "https://github.com/filroy-code/sosh-media-frontend",
                "_blank"
              );
            }}
          >
            <a
              href="https://github.com/filroy-code/sosh-media-frontend"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </ActionButton>
        </div>
        <div className="rightProjectContainer">
          <a
            href="https://sosh-media.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projectPreview"
              src={soshPreview}
              alt="Sosh App Preview"
            ></img>
          </a>
        </div>
      </div>
      <div className="classSpaceProject">
        <div className="leftProjectContainer">
          <a
            href="https://class-space.netlify.app/user"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projectPreview"
              src={classSpacePreview}
              alt="Class-Space App Preview"
            ></img>
          </a>
        </div>

        <div className="projectTextContainer">
          <div className="projectPreviewText">
            <div className="projectTitle">Class-Space</div>
            <div className="projectSubheading">
              A classroom management webapp.
            </div>
            <p className="projectInfo">
              Built with React, TypeScript, PostgreSQL, Node, and D3.js.
            </p>
          </div>
          <div></div>

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open("https://class-space.netlify.app/user", "_blank");
            }}
          >
            <a
              href="https://class-space.netlify.app/user"
              target="_blank"
              rel="noreferrer"
            >
              Live App
            </a>
          </ActionButton>

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open(
                "https://github.com/filroy-code/class-space-frontend",
                "_blank"
              );
            }}
          >
            <a
              href="https://github.com/filroy-code/class-space-frontend"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </ActionButton>
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

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open("https://nba-pct.netlify.app/", "_blank");
            }}
          >
            <a
              href="https://nba-pct.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live App
            </a>
          </ActionButton>

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open("https://github.com/filroy-code", "_blank");
            }}
          >
            <a
              href="https://github.com/filroy-code"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </ActionButton>
        </div>
        <div className="rightProjectContainer">
          <a
            href="https://nba-pct.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projectPreview"
              src={nbaAppPreview}
              alt="NBA Play Comparison Tool Preview"
            ></img>
          </a>
        </div>
      </div>
      <div className="cvAppProject">
        <div className="leftProjectContainer">
          <a
            href="https://filroy-code.github.io/cv_app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projectPreview"
              src={cvAppPreview}
              alt="CV App Preview"
            ></img>
          </a>
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

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open("https://filroy-code.github.io/cv_app/", "_blank");
            }}
          >
            <a
              href="https://filroy-code.github.io/cv_app/"
              target="_blank"
              rel="noreferrer"
            >
              Live App
            </a>
          </ActionButton>

          <ActionButton
            variant="contained"
            onClick={() => {
              window.open("https://github.com/filroy-code", "_blank");
            }}
          >
            <a
              href="https://github.com/filroy-code"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </ActionButton>
        </div>
      </div>
    </div>
  );
});

export default Projects;
