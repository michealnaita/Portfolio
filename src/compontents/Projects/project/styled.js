import styled, { css } from "styled-components";
export const ProjectWrapper = styled.div`
  transition: 0.5s ease;
  background-color: #222221;
  height: 45%;
  border-radius: 2px;
  padding: 17px;
  position: relative;
  &:hover {
    opacity: 1;
    &:after {
      opacity: 0;
      pointer-events: none;
    }
  }
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(225, 225, 225, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s ease;
  }
  &:nth-child(1) {
    transform: translateY(44%);
  }
  &:nth-child(3) {
    transform: translateY(-44%);
  }
  .project-content {
    text-align: left;
    p {
      color: #707070;
      color: white;
      color: rgba(255, 255, 255, 0.5);
    }
    h2 {
      color: #000;
      color: white;
      padding: 8px 0;
    }
  }
  .project-image {
    width: 100%;
    height: 60%;
    background-color: #222221;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 1400px) {
    height: 100%;
    &:nth-child(3) {
      transform: translateY(6%);
      grid-column: 2/3;
    }
  }
  @media (max-width: 779px) {
    .project-image {
      height: 50%;
    }
  }
  @media (max-width: 700px) {
    .project-image {
      height: 55%;
    }
    padding: 17px;
    height: 450px;
    transform: translateY(0) !important;
    max-width: 350px;
  }

  /* background-color: rgba(225, 225, 225, 0.9);
  .project-content {
    text-align: left;
    p {
      color: #707070;
    }
    h2 {
      color: #000;
    }
  } */
`;
export const Button = styled.button`
  display: block;
  background: none;
  outline: none;
  color: #ff5964;
  font-size: 20px;
  border: none;
  margin-left: auto;
  cursor: pointer;
`;
