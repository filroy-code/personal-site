import React from "react";

export default function Header(props) {
  let navItemsRef = React.useRef();
  let observer = new IntersectionObserver(
    (entry) => {
      if (
        (entry[0].target.id === "hero" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "hero")
      ) {
        navItemsRef.current.childNodes[0].classList.add("active");
        navItemsRef.current.childNodes[1].classList.remove("active");
        navItemsRef.current.childNodes[2].classList.remove("active");
        navItemsRef.current.childNodes[3].classList.remove("active");
      } else if (
        (entry[0].target.id === "about" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "about")
      ) {
        navItemsRef.current.childNodes[1].classList.add("active");
        navItemsRef.current.childNodes[0].classList.remove("active");
        navItemsRef.current.childNodes[2].classList.remove("active");
        navItemsRef.current.childNodes[3].classList.remove("active");
      } else if (
        (entry[0].target.id === "projects" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "projects")
      ) {
        navItemsRef.current.childNodes[2].classList.add("active");
        navItemsRef.current.childNodes[1].classList.remove("active");
        navItemsRef.current.childNodes[0].classList.remove("active");
        navItemsRef.current.childNodes[3].classList.remove("active");
      } else if (
        (entry[0].target.id === "contact" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "contact")
      ) {
        navItemsRef.current.childNodes[3].classList.add("active");
        navItemsRef.current.childNodes[1].classList.remove("active");
        navItemsRef.current.childNodes[2].classList.remove("active");
        navItemsRef.current.childNodes[0].classList.remove("active");
      }
    },
    { root: props.observerRoot.current, threshold: 0.0001 }
  );

  React.useEffect(() => {
    observer.observe(props.homeLink.current);
    observer.observe(props.aboutLink.current);
    observer.observe(props.projectsLink.current);
    observer.observe(props.contactLink.current);
  });
  return (
    <nav>
      <div ref={navItemsRef} className="navItems">
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
