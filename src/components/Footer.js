import React from "react";
import githubIcon from "../resources/github.png";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/filroy-code" target="_blank" rel="noreferrer">
        <img className="footerIcon" src={githubIcon} alt="Github"></img>
      </a>
      <div>Filip Andrejuk - © 2022</div>
    </footer>
  );
}
