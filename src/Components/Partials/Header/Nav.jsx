import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavStyled } from "./Styled.Nav";

export const Nav = () => {
  // Set the burgermenu to true, if window width is larger than 768
  const burgerWidth = "768"
  const [burgermenu, setBurgermenu] = useState(window.innerWidth >= burgerWidth);
  // Change the value of the burgermenu state to the opposite, if window width..
  const showBurgermenu = () => {
    if (window.innerWidth <= burgerWidth) { 
    setBurgermenu(!burgermenu)};
  };
  return (
    <NavStyled>
      <button onClick={showBurgermenu}>
        {!burgermenu ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      <ul style={{ display: burgermenu ? "flex" : "none" }}>
        <li>
          <Link to="/" onClick={showBurgermenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={showBurgermenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={showBurgermenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={showBurgermenu}>
            Products
          </Link>
        </li>
      </ul>
    </NavStyled>
  );
};
