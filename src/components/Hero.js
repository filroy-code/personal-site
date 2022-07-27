import React from "react";
import ParticleCanvas from "./ParticleCanvas";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <div id="hero">
      <ParticleCanvas></ParticleCanvas>
      <HeroText></HeroText>
    </div>
  );
}
