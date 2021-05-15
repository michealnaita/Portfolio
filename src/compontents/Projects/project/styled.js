import styled, { css } from "styled-components";
export const ProjectWrapper = styled.div`
  background-color: white;
  height: 50%;
  border-radius: 2px;
  color: #000;
  padding: 17px;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      &:after {
        opacity: 0;
        pointer-events: none;
      }
    `}
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(225, 225, 225, 0.5);
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
      font-size: 14px;
    }
    h2 {
      color: #000;
      padding: 8px 0;
    }
  }
  .project-image {
    width: 100%;
    height: 65%;
    background-color: #222221;
  }
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
