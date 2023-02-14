import styled from "styled-components";

export const StyledReview = styled.section`
  grid-column: c;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 3fr;
  > h2 {
    grid-area: 1 / 1 / 1 / -1;
  }
  article {
    background-color: ${(props) => props.theme.colors.rosa};
    padding: 1rem 5rem;
    grid-area: 2 / 1 / -1 / -1;
    position: relative;
    button.showbutton {
      background-color: #333333;
      border: none;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      z-index: 10;
      cursor: pointer;
      svg {
        color: #666666;
        font-size: 3rem;
      }
    }
    button.hidebutton {
      background-color: #333333;
      border: none;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      cursor: pointer;
      svg {
        color: #666666;
        font-size: 3rem;
      }
    }
    form {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
