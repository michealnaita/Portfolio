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
              I am a Front End developer with experience building websites and
              web applications. I specialize in JavaScript and have professional
              experience working with React.js and Node.js. I also have
              experience working with Firebase, Mysql, HTML and CSS
              {showMore ? (
                <p>
                  <h3>What is Lorem Ipsum?</h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
      <MarqueeCont />
    </div>
  );
}

function MarqueeCont() {
  return (
    <Marquee
      gradientColor={[10, 9, 8]}
      pauseOnHover="true"
      className="marquee"
      speed={30}
    >
      <img src="assets/icons/mysql.svg" />
      <img src="assets/icons/node.svg" />
      <img src="assets/icons/html.svg" />
      <img src="assets/icons/ui.svg" />
      <img src="assets/icons/react.svg" />
      <img src="assets/icons/css.svg" />
    </Marquee>
  );
}
