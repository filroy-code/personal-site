import React from "react";

export default function HeroText(props) {
  const [loading, setLoading] = React.useState(true);
  const goToContentRef = React.useRef(null);
  const secondHeadingRef = React.useRef(null);

  if (!loading) {
    setTimeout(() => {
      secondHeadingRef.current.classList.remove("heroHeadingLoading");
      secondHeadingRef.current.classList.add("heroHeading");
    }, 1000);
  }

  if (!loading) {
    setTimeout(() => {
      goToContentRef.current.classList.add("visible");
    }, 2000);
  }

  React.useEffect(() => setLoading(false), []);
  return (
    <div className="heroText">
      <div
        className={loading ? "heroHeadingLoading" : "heroHeading"}
        style={{ position: "relative" }}
      >
        Hi, I'm <span style={{ color: "rgb(236, 76, 76)" }}>Fil.</span>
      </div>
      <div
        style={{ position: "relative" }}
        ref={secondHeadingRef}
        className={"heroHeadingLoading"}
      >
        I'm a full stack web developer.
      </div>
      <div
        ref={goToContentRef}
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
