import styled from "styled-components";
export const ProjectsContainer = styled.section`
  min-height: 1100px;
  /* background-color: rgba(225, 225, 225, 0.4); */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 84px;
  align-items: center;
  @media (max-width: 1400px) {
    grid-gap: 30px;
  }
  @media (max-width: 1400px) {
    grid-gap: 30px;
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: repeat(2, 480px);
    justify-content: center;
  }
  @media (max-width: 779px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
