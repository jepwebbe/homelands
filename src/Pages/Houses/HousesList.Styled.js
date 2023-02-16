import styled from "styled-components";

export const StyledHousesList = styled.section`
  > div:nth-child(1) {
    grid-area: a;
    padding: 0 ${(props) => props.theme.space.sidePadding};
    display: flex;
    justify-content: space-between;
    align-items: center;
    select {
      width: 10rem;
      padding: 0.3rem;
      border: none;
      background-color: white;
      box-shadow: 0 0.1875rem 0.625rem rgb(0 0 0 / 0.2);
      option {
        background-color: transparent;
      }
    }
  }
  div:nth-child(2) {
    grid-area: b;
    > a {
      color: black;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 1.5rem;
  > div:nth-child(1) {
    justify-content: center;
    gap: 1rem;
  }
  }
`;
