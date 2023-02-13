import React from "react";
import { HeaderStyled } from "./Styled.Header";
import { Nav } from "./Nav";
import { BgStyled } from "./Styled.Bg";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <div className="navigation">
          <h1>HOMELANDS</h1>
          <Nav />
        </div>
        <BgStyled>
          <div className="headerBg"></div>
          <div className="triangleOne"></div>
          <div className="triangleTwo"></div>
        </BgStyled>
      </HeaderStyled>
    </>
  );
};
