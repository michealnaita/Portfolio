import React from "react";
import styled from "styled-components";
export default function () {
  return (
    <ContactForm>
      <h2>let's work together on your next project.</h2>
      <div className="form-group">
        <label htmlFor="name">name</label>
        <input id="name" type="text" name="name" autoComplete="off" />
      </div>
      <div className="form-group">
        <label htmlFor="email">email</label>
        <input id="email" type="text" name="email" autoComplete="off" />
      </div>
      <div className="form-group">
        <label htmlFor="message">message</label>
        <textarea id="message" type="text" name="message" autoComplete="off" />
      </div>
      <Button>
        <div>
          <span>send</span>
          <img src="assets/icons/arrow-right.svg" />
        </div>
      </Button>
    </ContactForm>
  );
}
const ContactForm = styled.form`
  width: max-content;
  h2 {
    margin-bottom: 24px;
    font-weight: 400;
  }
  .form-group {
    max-width: 350px;
    width: 100%;
    padding-bottom: 10px;
    font-size: 16px;
    label {
      font-size: 14px;
    }
    input,
    textarea {
      width: 100%;
      min-width: 330px;
      min-height: 30px;
      max-height: 200px;
      max-width: 350px;
      height: 30px;
      background-color: transparent;
      outline: none;
      border: none;
      border-bottom: 2px solid white;
      border-color: transparent;
      transition: 0.1s ease;
      color: #707070;
      &:focus {
        border-color: white;
      }
    }
  }
`;
const Button = styled.button`
  margin-top: 48px;
  width: 80px;
  height: 48px;
  background-color: transparent;
  border: 1px solid #ffb500;
  font-size: 20px;
  color: white;
  outline: none;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  &:hover {
    width: 175px;
    background-color: #ffb500;
    div {
      transform: translatex(0);
      span {
        opacity: 1;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatex(-40px);
    transition: 0.3s ease-in-out;
    img {
      margin-left: 20px;
    }
    span {
      opacity: 0;
      transition: 0.35s ease-in-out;
    }
  }
`;
