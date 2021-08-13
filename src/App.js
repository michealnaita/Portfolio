import "./App.css";
import Landing from "./compontents/LandingPage";
import Navigation from "./compontents/Navigation";
import Footer from "./compontents/Footer";
import styled, { css } from "styled-components";
import About from "./compontents/About";
import Projects from "./compontents/Projects";
import { Element } from "react-scroll";
import { useEffect, useRef } from "react";
import { revealTextOnScroll } from "./compontents/LandingPage/animate";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Element name="landing">
        <Landing />
      </Element>
      <Page pageName="About" align="left" name="about">
        <About />
      </Page>
      <Page pageName="Projects" align="right" name="projects">
        <Projects />
      </Page>
      <Page pageName="Contact" align="left" name="contact">
        <Footer />
      </Page>
    </div>
  );
}

function Page({ pageName, children, align, name }) {
  let elem = useRef(null);
  useEffect(() => {
    revealTextOnScroll(elem);
  }, []);
  return (
    <Div align={align} name={name}>
      <div className="page-title" ref={(el) => (elem = el)}>
        <h1>&lt;{pageName || "Page"} /&gt;</h1>
      </div>
      <div className="page-content">{children}</div>
    </Div>
  );
}
const Div = styled(Element)`
  padding: 130px 0;
  padding-bottom: 0;
  max-width: 1641px;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 1641px) {
    margin: 0 24px;
  }
  .page-title {
    position: absolute;
    ${({ align }) =>
      align &&
      css`
        ${align}:0;
      `}
    top: 50px;
    z-index: -1;
    h1 {
      font-family: "Source Code Pro";
      font-weight: 700;
      font-style: italic;
      font-size: 100px;
      color: #222221;
    }
  }
`;
export default App;
