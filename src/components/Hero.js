import React from "react";
import ParticleCanvas from "./ParticleCanvas";
import HeroText from "./HeroText";

const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="hero">
      <ParticleCanvas></ParticleCanvas>
      <HeroText
        projectsLink={props.projectsLink}
        activateProjects={props.activateProjects}
      ></HeroText>
    </div>
  );
});

export default Hero;
