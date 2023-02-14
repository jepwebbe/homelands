import React from "react";
import { StyledHeader } from "./Header.Styled";
import { Nav } from "./Nav";
import { StyledBg } from "./Bg.Styled";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="navigation">
          <h1>HOMELANDS</h1>
          <Nav />
        </div>
        <StyledBg>
          <div className="headerBg"></div>
          <div className="triangleOne"></div>
          <div className="triangleTwo"></div>
        </StyledBg>
      </StyledHeader>
    </>
  );
};
