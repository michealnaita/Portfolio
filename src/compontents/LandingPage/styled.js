import styled from "styled-components";
export const Landing = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  .hero {
    position: absolute;
    bottom: 10%;
    right: -25%;
    z-index: -1;
    opacity: 0.1;
  }
  @media (max-width: 825px) {
    .hero {
      position: absolute;
      bottom: 0;
      right: -20%;
      z-index: -1;
      opacity: 0.1;
    }
  }
  @media (max-width: 600px) {
    .hero {
      display: none;
    }
  }
  section {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    /* background-color: rgba(255, 255, 255, 0.5); */
  }
`;
