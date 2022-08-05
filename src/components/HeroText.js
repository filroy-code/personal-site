import React from "react";

export default function HeroText(props) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => setLoading(false), []);
  return (
    <div className="heroText">
      <div className={loading ? "heroHeadingLoading" : "heroHeading"}>
        Hi, I'm <span style={{ color: "rgb(236, 76, 76)" }}>Fil.</span>
      </div>
      <div className={loading ? "heroHeadingLoading" : "heroHeading"}>
        I'm a full stack web developer.
      </div>
      <div
        onClick={() => {
          props.projectsLink.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          props.activateProjects();
        }}
        className="goToContent"
      >
        View my work ↓
      </div>
    </div>
  );
}
