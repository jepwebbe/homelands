import styled from "styled-components";

export const NavStyled = styled.nav`
  background-color: transparent;
  button {
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
