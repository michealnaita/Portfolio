import styled, { css } from "styled-components";
const primaryColor = "#FF5964";
const secondaryColor = "#FFB500";
export const MenuButton = styled.div`
  width: 30px;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;
  &:after,
  &:before {
    display: block;
    content: "";
    width: 30px;
    height: 6px;
    background-color: white;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    ${({ toggled }) =>
      !toggled &&
      css`
        &:after {
          transform: translateY(-125%);
        }
        &:before {
          transform: translateY(125%);
        }
      `}
  }
  ${({ toggled }) =>
    toggled &&
    css`
      &:after {
        height: 4px;
        transform: translateY(-8.5px) rotateZ(45deg);
      }
      &:before {
        height: 4px;
        transform: translateY(8.5px) rotateZ(315deg);
      }
    `}
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  z-index: 10;
  .logo {
    z-index: 10;
  }
`;
export const Nav = styled.div`
  /* background-color: rgba(255, 255, 255, 0.5); */
  margin: auto;
  padding: 10px 0;
  max-width: 1641px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1641px) {
    margin: 0 24px;
  }
  .nav-right {
    display: flex;

    .page-links {
      margin-right: 115px;
      display: flex;
      /* opacity: 0; */
      /* &.show {
        opacity: 1;
      } */
      .link {
        pointer-events: ${({ navToggled }) => (navToggled ? "all" : "none")};
        cursor: pointer;
        opacity: 0;
        transform: translateX(120px);
        margin: 0 15px 0 15px;
        color: white;
        z-index: 2;
        &.active,
        &:hover {
          p {
            color: ${secondaryColor};
            span {
              padding: 0 1px;
              /* letter-spacing: 1.5; */
              transition: all 0.2s ease;
              color: ${primaryColor};
              &:nth-child(1) {
                transform: translateY(2px);
              }
              &:nth-child(2) {
                transform: translateY(-2px);
              }
              &:nth-child(3) {
                transform: translateY(2px);
              }
              &:nth-child(4) {
                transform: translateY(-2px);
              }
              &:nth-child(5) {
                transform: translateY(2px);
              }
              &:nth-child(6) {
                transform: translateY(2px);
              }
              &:nth-child(7) {
                transform: translateY(-2px);
              }
              &:nth-child(8) {
                transform: translateY(2px);
              }
            }
          }
          &:after {
            /* display: block; */
            content: "";
            background-color: ${secondaryColor};
            height: 2px;
            width: 100%;
            transform: translateY(-10px);
            z-index: -1;
          }
        }
        p {
          padding: 0 4px 0 4px;
        }
      }
    }
    @media (max-width: 622px) {
      .page-links {
        opacity: 0;
        pointer-events: ${({ navToggled }) => (navToggled ? "all" : "none")};
        height: 100vh;
        width: 100vw;
        position: fixed;
        left: 0;
        top: 0;
        flex-direction: column;
        background-color: #0a0908;
        justify-content: center;
        align-items: center;
        .link {
          margin: 24px;
          p {
            font-size: 40px;
          }
        }
      }
    }
  }
`;
