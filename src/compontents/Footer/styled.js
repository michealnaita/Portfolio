import styled from "styled-components";
export const Footer = styled.footer`
  text-align: left;
  .footer-logo {
    margin-bottom: 24px;
    /* width: 30px; */
  }
  .middle-content {
    display: flex;
    justify-content: space-between;
    .address {
      margin-top: auto;
      text-align: right;
      p {
        padding: 8px 0;
        color: #707070;
        font-size: 14px;
      }
    }
  }
  .footer-links {
    padding: 30px 0;
    width: max-content;
    margin-left: auto;
    img {
      margin-left: 20px;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  @media (max-width: 600px) {
    .footer-logo {
      display: none;
    }
    .middle-content {
      flex-direction: column;
      justify-content: center;
      align-items: left;
      .address {
      }
    }
  }
`;
