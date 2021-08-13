import "./App.scss";
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
  const scrollbar_ref = useRef();
  function animateScroll() {
    const scrollPercentage =
      (100 / (document.documentElement.scrollHeight - window.innerHeight)) *
      window.scrollY;
    scrollbar_ref.current.style.width = `${scrollPercentage}%`;
  }
  useEffect(() => {
    if (scrollbar_ref.current) {
      window.addEventListener("scroll", animateScroll);
    }
    return () => {
      window.removeEventListener("scroll", animateScroll);
    };
  }, []);
  return (
    <>
      <ScrollBar ref={scrollbar_ref} />
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
    </>
  );
}

const ScrollBar = styled.div`
  width: 0%;
  height: 1px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ff5964;
  z-index: 5;
`;
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
  @media (max-width: 1641px) {
    max-width: 100%;
    margin: 0;
    padding: 130px 24px;
    padding-bottom: 0;
  }
  @media (max-width: 748px) {
    .page-title {
      h1 {
        font-size: 40px;
      }
    }
  }
`;
export default App;
