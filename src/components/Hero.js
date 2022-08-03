import React from "react";
import ParticleCanvas from "./ParticleCanvas";
import HeroText from "./HeroText";

const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="hero">
      <ParticleCanvas></ParticleCanvas>
      <HeroText></HeroText>
    </div>
  );
});

export default Hero;
