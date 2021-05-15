import React from "react";
import Project from "./project";
import { ProjectsContainer } from "./styled";

export default function Pojects() {
  return (
    <ProjectsContainer>
      <Project />
      <Project active />
      <Project />
    </ProjectsContainer>
  );
}
