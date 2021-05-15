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
  section {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
