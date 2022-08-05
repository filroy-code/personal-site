import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const homeLink = React.useRef();
  const aboutLink = React.useRef();
  const projectsLink = React.useRef();
  const contactLink = React.useRef();
  const observerRoot = React.useRef();
  const headerRef = React.useRef();

  function activateProjects() {
    headerRef.current.children[0].children[2].classList.add("active");
    headerRef.current.children[0].children[0].classList.remove("active");
    headerRef.current.children[0].children[1].classList.remove("active");
    headerRef.current.children[0].children[3].classList.remove("active");
  }
  return (
    <div className="App">
      <div ref={observerRoot} className="observerRoot"></div>
      <Hero
        projectsLink={projectsLink}
        ref={homeLink}
        activateProjects={activateProjects}
      ></Hero>
      <Header
        ref={headerRef}
        homeLink={homeLink}
        aboutLink={aboutLink}
        projectsLink={projectsLink}
        contactLink={contactLink}
        observerRoot={observerRoot}
      ></Header>
      <About ref={aboutLink}></About>
      <Projects ref={projectsLink}></Projects>
      <Contact ref={contactLink}></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
