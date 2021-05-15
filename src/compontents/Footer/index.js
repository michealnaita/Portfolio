import React from "react";
import ContactForm from "./contact";
import { Footer } from "./styled";

export default function index() {
  return (
    <Footer>
      <section>
        <div className="footer-logo">
          <img src="assets/images/logo-white.svg" alt="logo" />
        </div>
        <div className="middle-content">
          <ContactForm />
          <div className="address">
            <p className="">hello@michealnaita.com</p>
            <p className="color-primary ">256-778123456</p>
            <p className="">Kampala, Uganda</p>
          </div>
        </div>
        <div className="footer-links">
          <img
            src="assets/icons/linkedin.svg"
            alt="linkedin icon"
            width="25px"
          />
          <img src="assets/icons/github.svg" alt="github icon" width="25px" />
        </div>
      </section>
    </Footer>
  );
}
