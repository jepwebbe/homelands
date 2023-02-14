import React from "react";
import { StyledFooter } from "./Footer.Styled";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa"

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h3>HomeLands</h3>
        <p>
          Øster Uttrupvej 5 <br /> 9000 Aalborg
        </p>
        <p>
          Email: <a href="mailto:info@homelands.dk">info@homelands.dk</a> <br />
          Telefon: +45 1122 3344
        </p>
      </div>
      <div>
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitterSquare />
        </a>
      </div>
    </StyledFooter>
  );
};
