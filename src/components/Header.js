import React from "react";

export default function Header(props) {
  return (
    <nav>
      <div className="navItems">
        <div
          onClick={() =>
            props.homeLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Home
        </div>
        <div
          onClick={() =>
            props.aboutLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          About
        </div>
        <div
          onClick={() =>
            props.projectsLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Projects
        </div>
        <div
          onClick={() =>
            props.contactLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Contact
        </div>
      </div>
    </nav>
  );
}
