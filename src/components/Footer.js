import React from "react";
import githubIcon from "../resources/github.png";

export default function Footer() {
  return (
    <footer>
      <img
        className="footerIcon"
        src={githubIcon}
        alt="Github"
        onClick={() => {
          window.open("https://github.com/filroy-code", "_blank");
        }}
      ></img>
      <div style={{ marginBottom: "10px" }}>Filip Andrejuk - © 2022</div>
    </footer>
  );
}
