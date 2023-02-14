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

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
  }
`;
