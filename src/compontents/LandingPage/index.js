import React, { useEffect, useState } from "react";
import classes from "classnames";
import Content from "./content.js";
import { Landing } from "./styled";
import Hero from "./hero";
import { pin } from "./animate";

export default function (props) {
  useEffect(() => {
    pin();
  }, []);
  return (
    <Landing>
      <section>
        <Content />
      </section>
      <div className="hero">
        <Hero />
      </div>
    </Landing>
  );
}
