import styled from "styled-components";

export const NavStyled = styled.nav`
  background-color: transparent;
  button.burgerbutton {
    display: none;
  }
  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 0;
    margin: 0;
    li a {
      font-size: 1.75rem;
      color: white;
    }
  }
  ul .active {
    color: ${(props) => props.theme.colors.orange};
  }
  li:last-of-type {
    align-self: center;
    form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      input {
        grid-column: 1 / -1;
        grid-row: 1/-1;
        padding: 0 0 0 5px;
        border: none;
        border-radius: 0.2rem;
      }
      button {
        grid-column: 2 / 2;
        grid-row: 1/-1;
        justify-self: end;
        width: 2rem;
        background-color: #999999;
        border: none;
        cursor: pointer;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    button {
      display: block;
      background-color: transparent;
      border: none;
      padding: 1rem;
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
    }
    ul {
      flex-direction: column;
      background: white;
      padding: 1rem;
      margin: 0;
      width: 50vw;
    }
  } ;
`;
