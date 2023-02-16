import styled from "styled-components";

export const StyledHeader = styled.header`
height: 8rem;
grid-area: header;
div.navigation {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.space.sidePadding};
  padding-top: 1rem;
  h1 {
    color: white;
    background-color: ${(props) => props.theme.colors.orange};
    padding: 1rem;
    border: 2px solid black;
    font-size: 4rem;
    margin: 0;
  }
}
button.burgerbutton {
  display: none;
}

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    height: 5rem;
    div.navigation {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 1rem;

     h1 {
      font-size: 3rem;
      padding: 0.5rem;
      height: 4rem;
      width: 15rem;
      a {
        color: white;
      }
    }
    button.burgerbutton {
      display: block;
      border: none;
      height: 3rem;
      width: 3rem;
      border-radius: 1rem;
      cursor: pointer;
      background-color: ${props => props.theme.colors.orange};
      justify-self: end;
      >svg {
        font-size: 2rem;
        color: white;
      }
    }

  }

  }
`;
