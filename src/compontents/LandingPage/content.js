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
    let change = true;
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
  console.log(contentRef);
  return (
    <Content ref={(el) => (contentRef = el)} className="pin">
      <div className="reveal-container">
        <h1 className="greeting reveal">{greeting}!</h1>
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
          <span className="typography reveal">
            a freelance front-end engineer.
          </span>
        </div>
      </h2>
      <div className="reveal-container">
        <Button className="landing-cta reveal">résumé</Button>
      </div>
    </Content>
  );
}

const Content = styled.div`
  .greeting {
    margin-bottom: 24px;
    font-size: 63px;
    color: #fff;
    font-weight: 400;
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
`;
const Button = styled.button`
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
  /* transition: 0.2s ease-in; */
  border: 1px solid #ffb500;
  border-color: transparent;
  /* transition: all 0.2s ease; */
  /* opacity: 0; */
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
