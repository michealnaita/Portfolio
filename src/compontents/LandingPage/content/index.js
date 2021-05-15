import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { initTypography } from "../../../utils/typography.js";

export default function () {
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
  }, []);
  return (
    <Content>
      <h1 className="greeting">{greeting}!</h1>
      <h2 className="description">
        <span className="typography">I'm </span>
        <span className="name typography">Micheal Naita</span>
        <span className="typography">,</span>
        <br />
        <span className="typography">a creative Front End Web Developer.</span>
      </h2>
      <Button style={{ textTransfom: "uppercase" }}>résumé</Button>
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
  transition: 0.2s ease-in;
  border: 1px solid #ffb500;
  border-color: transparent;
  &:hover {
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
