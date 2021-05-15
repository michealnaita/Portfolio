import React from "react";
import { ProjectWrapper, Button } from "./styled";

export default function Project({ active }) {
  return (
    <ProjectWrapper active={active}>
      <div className="project-image"></div>
      <div className="project-content">
        <h2>Project No.1</h2>
        <p>
          I am a Front End developer with experience building websites and web
          applications. I specialize in JavaScript and have professional
          experience working with React.js and Node.js. I also have experience
          working with Firebase, Mysql, HTML and CS
        </p>
      </div>
      <Button>case study</Button>
    </ProjectWrapper>
  );
}
