import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { StyledNav } from "./Nav.Styled";
import Search from "./Search/Search";
import { useLoginStore } from "../../../Pages/Login/Login/useLoginStore";

export const Nav = () => {
  // Set the burgermenu to true, if window width is larger than 768
  const burgerWidth = "768"
  const [burgermenu, setBurgermenu] = useState(window.innerWidth >= burgerWidth);
  const { loggedIn, setLogOut } = useLoginStore()

  // Change the value of the burgermenu state to the opposite, if window width..
  const showBurgermenu = () => {
    if (window.innerWidth <= burgerWidth) { 
    setBurgermenu(!burgermenu)};
  };
  return (
    <StyledNav>
      <button onClick={showBurgermenu} className="burgerbutton">
        {!burgermenu ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      <ul style={{ display: burgermenu ? "flex" : "none" }}>
        <li>
          <NavLink  to="/" onClick={showBurgermenu}>
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink  to="/boliger" onClick={showBurgermenu}>
            Boliger til salg
          </NavLink>
        </li>
        <li>
          {!loggedIn ? <NavLink to="/login" onClick={showBurgermenu}>
            Login
          </NavLink> : <NavLink to="/login" onClick={showBurgermenu}>Admin</NavLink>}
        </li>
        <li>
         <Search />
        </li>
      </ul>
    </StyledNav>
  );
};
