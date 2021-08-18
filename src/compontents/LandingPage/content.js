import React from "react";
import styled from "styled-components";

export default function LandingPageContent() {
  return (
    <Content className="pin">
      <div className="reveal-container">
        <h1 className="greeting reveal">
          Coming Soon{" "}
          <span role="img" aria-label="waving hand">
            🏃🏿🌫
          </span>
        </h1>
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
      font-weight: 700;
      color: #ff5964 !important;
    }
  }
  @media (max-width: 581px) {
    min-width: 100px;
    max-width: 350px;
  }
`;
