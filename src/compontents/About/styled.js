import styled, { css } from "styled-components";
export const Button = styled.div`
  display: inline;
  margin-left: 10px;
  cursor: pointer;
  ${({ showMore }) =>
    showMore &&
    css`
      display: inline-block;
      margin-top: 10px;
      margin-left: 0px;
      img {
        display: none;
      }
      &:before {
        display: inline;
        content: "show less";
        margin-right: 10px;
        color: #ff5964;
        font-weight: 400;
      }
    `}
  img {
    transition: 0.2s ease;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;
export const Content = styled.div`
  margin-top: 24px;
  max-width: 700px;
  font-weight: 300;
  &:before {
    display: block;
    content: url("/assets/icons/quotes.svg");
    width: min-content;
  }
  &:after {
    display: block;
    content: url("/assets/icons/quotes.svg");
    width: min-content;
    margin-left: auto;
  }
  .content {
    padding: 0 15px;
  }
`;
export const About = styled.div`
  width: max-content;
  margin-left: auto;
  @media (max-width: 748px) {
    width: 100%;
    ${Content} {
      max-width: 100%;
    }
    .tech-img {
      width: 50px !important;
    }
  }
`;
export const AboutWrapper = styled.section``;
