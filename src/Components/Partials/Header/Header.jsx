import React from "react";
import { StyledHeader } from "./Header.Styled";
import { Nav } from "./Nav";
import { StyledBg } from "./Bg.Styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <StyledHeader>
        <div className="navigation">
          <h1><Link to="/">HOMELANDS</Link></h1>
          <Nav />
        </div>
        <StyledBg>
          <div className="headerBg"></div>
          <div className="triangleOne"></div>
          <div className="triangleTwo"></div>
        </StyledBg>
      </StyledHeader>
  );
};
