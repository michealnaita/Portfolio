import React, { useState, useEffect, useRef } from "react";
import { MenuButton, Nav, NavWrapper } from "../Navigation/styled";
import classes from "classnames";
import { animateLinks } from "./animations";
import { splitText } from "../LandingPage/text";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navigation(props) {
  const [navToggled, setNavToggled] = useState(false);
  let [firstToggle, setFirstToggle] = useState();
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  const [active, setActive] = useState("");
  const toggleNav = () => setNavToggled(!navToggled);
  useEffect(() => {
    if (navToggled === true) {
      setFirstToggle(animateLinks([link3, link2, link1]));
    }
    if (firstToggle && navToggled === false) return firstToggle.reverse();
  }, [navToggled]);
  useEffect(() => {
    splitText();
  }, []);
  return (
    <NavWrapper>
      <Nav>
        <Link
          to="landing"
          smooth={true}
          spy={true}
          onSetActive={() => setActive("")}
        >
          <img src="assets/images/logo.png" alt="logo" />
        </Link>
        <div className="nav-right">
          <ul className={classes("page-links", { show: navToggled })}>
            <li
              ref={(el) => (link1 = el)}
              onClick={() => setActive("about")}
              className={classes("link", { active: active === "about" })}
            >
              <Link
                to="about"
                smooth={true}
                spy={true}
                onSetActive={() => setActive("about")}
              >
                <p className="text">about</p>
              </Link>
            </li>
            <li
              ref={(el) => (link2 = el)}
              className={classes("link", { active: active === "projects" })}
            >
              <Link
                to="projects"
                smooth={true}
                onSetActive={() => setActive("projects")}
                spy={true}
              >
                <p className="text">projects</p>
              </Link>
            </li>
            <li
              ref={(el) => (link3 = el)}
              className={classes("link", { active: active === "contact" })}
            >
              <Link
                to="contact"
                smooth={true}
                spy={true}
                onSetActive={() => setActive("contact")}
              >
                <p className="text">contact</p>
              </Link>
            </li>
          </ul>
          <MenuButton toggled={navToggled} onClick={() => toggleNav()} />
        </div>
      </Nav>
    </NavWrapper>
  );
}
