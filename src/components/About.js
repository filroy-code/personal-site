import React from "react";
import filipImage from "../resources/filip.JPG";
import jsIcon from "../resources/javascript.png";
import reactIcon from "../resources/react.png";
import htmlIcon from "../resources/html.png";
import cssIcon from "../resources/css.png";
import mongodbIcon from "../resources/mongodb.png";
import nodeIcon from "../resources/node.png";
import expressIcon from "../resources/express.png";
import gitIcon from "../resources/git.png";
import typescriptIcon from "../resources/typescript.png";
import postgresqlIcon from "../resources/postgresql.png";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="about">
      <div className="sectionHeading">About</div>
      <div className="aboutMain">
        <div className="bioSection">
          <img className="filipImage" src={filipImage} alt="Filip"></img>
          <p>
            I am a flexible, technology-agnostic developer with a growth mindset
            and passion for learning new skills. The deep feeling of
            satisfaction that comes with seeing my abilities grow motivates me
            to seek out new challenges in my personal and professional life. In
            my free time I like to keep active with long-distance running, and
            developing my craft as a musician.
          </p>
        </div>
        <div className="technologies">
          <div className="techColumn">
            <div className="techBox">
              <img className="techIcon" src={jsIcon} alt="JavaScript"></img>
              <div>JavaScript</div>
            </div>
            <div className="techBox">
              <img className="techIcon" src={reactIcon} alt="React"></img>
              <div>React</div>
            </div>
            <div className="techBox">
              <img
                className="techIcon"
                src={typescriptIcon}
                alt="TypeScript"
              ></img>
              <div>TypeScript</div>
            </div>
          </div>
          <div className="techColumn">
            <div className="techBox">
              <img className="techIcon" src={htmlIcon} alt="HTML"></img>
              <div>HTML</div>
            </div>
            <div className="techBox">
              <img className="techIcon" src={expressIcon} alt="Express"></img>
              <div>Express</div>
            </div>
            <div className="techBox">
              <img className="techIcon" src={gitIcon} alt="Git"></img>
              <div>Git</div>
            </div>
            <div className="techBox">
              <img
                className="techIcon"
                src={postgresqlIcon}
                alt="PostgreSQL"
              ></img>
              <div>PostgreSQL</div>
            </div>
          </div>
          <div className="techColumn">
            <div className="techBox">
              <img className="techIcon" src={cssIcon} alt="CSS"></img>
              <div>CSS</div>
            </div>
            <div className="techBox">
              <img className="techIcon" src={nodeIcon} alt="Node"></img>
              <div>Node</div>
            </div>
            <div className="techBox">
              <img className="techIcon" src={mongodbIcon} alt="MongoDB"></img>
              <div>MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
