import React from "react";
import { ProjectWrapper, Button } from "./styled";

export default function Project({ content }) {
  return (
    <ProjectWrapper>
      <div className="project-image">
        <img width="100%" height="100%" src={content.image} alt="" />
      </div>
      <div className="project-content">
        <h2>{content.name}</h2>
        <p>{content.description}</p>
      </div>
      <Button href={content.link}>demo</Button>
    </ProjectWrapper>
  );
}
