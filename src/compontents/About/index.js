import React, { useState } from "react";
import { Button, Content, About } from "./styled";
import Marquee from "react-fast-marquee";

export default function AboutPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <section>
        <About>
          <h1>Who am I?</h1>
          <Content>
            <p className="content">
              I am a Front-end Web engineer based in Uganda with experience
              building websites and web applications. I specialize in JavaScript
              and have professional experience working with React.js and
              Node.js. I also have experience working with Firebase, Mysql, HTML
              and CSS
              {showMore ? (
                <p>
                  <br />
                  <h3>More about me?</h3>
                  Over the past months, I have worked on various projects
                  through freelance work and personal projects with that
                  experience, I believe that I can hack my way around
                  complicated user interfaces and tasks that require
                  problem-solving to build beautiful user interfaces
                  <br />
                  <br />
                  I’m excited about learning how to better my skills and new
                  conventions used in the industry for overall self-improvement,
                  That is why for every project that I work on I look at it as
                  an opportunity to learn or implement something new.
                </p>
              ) : null}
              <span>
                <Button
                  onClick={() => setShowMore(!showMore)}
                  showMore={showMore}
                >
                  <img src="assets/icons/more.svg" alt="more" />
                </Button>
              </span>
            </p>
          </Content>
        </About>
      </section>
      <MarqueeContainer />
    </div>
  );
}

function MarqueeContainer() {
  return (
    <Marquee
      gradientColor={[10, 9, 8]}
      pauseOnHover="true"
      className="marquee"
      speed={30}
    >
      <img src="assets/icons/mysql.svg" alt="" className="tech-img" />
      <img src="assets/icons/node.svg" alt="" className="tech-img" />
      <img src="assets/icons/html.svg" alt="" className="tech-img" />
      <img src="assets/icons/ui.svg" alt="" className="tech-img" />
      <img src="assets/icons/react.svg" alt="" className="tech-img" />
      <img src="assets/icons/css.svg" alt="" className="tech-img" />
    </Marquee>
  );
}
