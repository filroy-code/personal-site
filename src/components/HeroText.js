import React from "react";

export default function HeroText() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => setLoading(false), []);
  return (
    <div className={loading ? "heroTextLoading" : "heroText"}>
      <div className="heroHeading">Hi, I'm Fil.</div>
      <div className="heroHeading">I'm a full stack web developer.</div>
      <div className="goToContent">View my work ↓</div>
    </div>
  );
}
