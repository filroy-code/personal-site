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
  return (
    <div className="App">
      <Hero projectsLink={projectsLink} ref={homeLink}></Hero>
      <Header
        homeLink={homeLink}
        aboutLink={aboutLink}
        projectsLink={projectsLink}
        contactLink={contactLink}
      ></Header>
      <About ref={aboutLink}></About>
      <Projects ref={projectsLink}></Projects>
      <Contact ref={contactLink}></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
