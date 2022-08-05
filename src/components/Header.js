import React, { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  let navItemsRef = React.useRef();

  function activateHome() {
    navItemsRef.current.childNodes[0].classList.add("active");
    navItemsRef.current.childNodes[1].classList.remove("active");
    navItemsRef.current.childNodes[2].classList.remove("active");
    navItemsRef.current.childNodes[3].classList.remove("active");
  }

  function activateAbout() {
    navItemsRef.current.childNodes[1].classList.add("active");
    navItemsRef.current.childNodes[0].classList.remove("active");
    navItemsRef.current.childNodes[2].classList.remove("active");
    navItemsRef.current.childNodes[3].classList.remove("active");
  }

  function activateProjects() {
    navItemsRef.current.childNodes[2].classList.add("active");
    navItemsRef.current.childNodes[1].classList.remove("active");
    navItemsRef.current.childNodes[0].classList.remove("active");
    navItemsRef.current.childNodes[3].classList.remove("active");
  }

  function activateContact() {
    navItemsRef.current.childNodes[3].classList.add("active");
    navItemsRef.current.childNodes[1].classList.remove("active");
    navItemsRef.current.childNodes[2].classList.remove("active");
    navItemsRef.current.childNodes[0].classList.remove("active");
  }

  let observer = new IntersectionObserver(
    (entry) => {
      if (
        (entry[0].target.id === "hero" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "hero")
      ) {
        activateHome();
      } else if (
        (entry[0].target.id === "about" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "about")
      ) {
        activateAbout();
      } else if (
        (entry[0].target.id === "projects" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "projects")
      ) {
        activateProjects();
      } else if (
        (entry[0].target.id === "contact" && entry[0].isIntersecting) ||
        (entry.length > 1 &&
          entry[1].isIntersecting &&
          entry[1].target.id === "contact")
      ) {
        activateContact();
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
    <nav ref={ref}>
      <div ref={navItemsRef} className="navItems">
        <div
          onClick={() => {
            props.homeLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            activateHome();
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            props.aboutLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            activateAbout();
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            props.projectsLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            activateProjects();
          }}
        >
          Projects
        </div>
        <div
          onClick={() => {
            props.contactLink.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            activateContact();
          }}
        >
          Contact
        </div>
      </div>
    </nav>
  );
});

export default Header;
