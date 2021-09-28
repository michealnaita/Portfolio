import React from "react";
import Project from "./project";
import { ProjectsContainer } from "./styled";
import projects from "./projects.json";

export default function Pojects() {
  return (
    <ProjectsContainer>
      {projects.map((project, i) => (
        <Project key={i} content={project} />
      ))}
    </ProjectsContainer>
  );
}
