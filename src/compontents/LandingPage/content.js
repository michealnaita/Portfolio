import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { initTypography } from "../../utils/typography.js";
import { pin, revealText } from "./animate";

export default function LandingPageContent() {
  let contentRef = useRef(null);
  const [greeting, setGreeting] = useState("Hello");
  let greetingIndex = 0;
  function changeGreeting() {
    setTimeout(() => changeGreeting(), 5000);
    const greetings = ["Hello", "Gyebaleko", "Bonjour", "Hallo", "你好"];
    setGreeting(greetings[greetingIndex]);
    if (greetingIndex === greetings.length - 1) return (greetingIndex = 0);
    greetingIndex += 1;
  }
  useEffect(() => {
    initTypography(["one", "two", "three", "four", "five"]);
    changeGreeting();
    revealText(contentRef);
    pin(contentRef);
  }, []);
  // console.log(contentRef);
  return (
    <Content ref={(el) => (contentRef = el)} className="pin">
      <div className="reveal-container">
        {/* <h1 className="greeting reveal">{greeting}!</h1> */}
        <h1 className="greeting reveal">
          Hi{" "}
          <span role="img" aria-label="waving hand">
            👋🏿
          </span>
        </h1>
      </div>
      <h2 className="description">
        <div className="reveal-container">
          <div className="reveal" style={{ color: "inherit" }}>
            <span className="typography">I'm </span>
            <span className="name typography">Micheal Naita</span>
            <span className="typography">,</span>
          </div>
        </div>
        <br />
        <div className=" reveal-container">
          <div className="typography reveal">a Front-end Web engineer.</div>
        </div>
      </h2>
      <div className="reveal-container">
        <Button
          className="reveal"
          href="https://drive.google.com/file/d/1JqGMm-qJi_mPZeF7V7uXihihjr1ixSW-/view?usp=sharing"
        >
          résumé
        </Button>
      </div>
    </Content>
  );
}

const Content = styled.div`
  min-width: max-content;
  .greeting {
    margin-bottom: 24px;
    font-size: 63px;
    color: #fff;
    font-weight: 500;
    //animation: smoothChange 5s ease-in-out infinite;
    @keyframes smoothChange {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  .description {
    font-size: 32px;
    color: #707070;
    font-weight: 300;
    .name {
      font-size: 40px;
      font-weight: 400;
      color: #ff5964 !important;
    }
  }
  @media (max-width: 581px) {
    min-width: 100px;
    max-width: 350px;
  }
`;
const Button = styled.a`
  margin-top: 48px;
  width: 170px;
  height: 48px;
  background-color: #ffb500;
  font-size: 20px;
  color: white;
  outline: none;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  border: 1px solid #ffb500;
  border-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hove {
    border-color: #ffb500;
    background-color: transparent;
    padding: 10px 0 0 10px;
    &:after {
      transform: translate(5px, 5px);
      opacity: 1;
    }
  }
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: #ffb500;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 24px;
    z-index: -1;
    opacity: 0;
    transition: 0.2s ease-in;
  }
`;
