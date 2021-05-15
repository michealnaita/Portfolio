import styled, { css } from "styled-components";
import { ProjectWrapper } from "./project/styled";
export const ProjectsContainer = styled.section`
  min-height: 1100px;
  /* background-color: rgba(225, 225, 225, 0.4); */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 84px;
  align-items: center;
`;
