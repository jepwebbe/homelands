import styled from "styled-components";

export const StyledHouseDetails = styled.section`
  margin-top: -8rem;
  width: 100%;
  > div:nth-child(1) {
    grid-area: a;
    aspect-ratio: 21/5;
    overflow: hidden;
  }
  div.detailsgrid {
    grid-area: b;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "a b c" "d e f" "g e h";
    div {
      display: flex;
    }
    > div:nth-child(1) {
      grid-area: a;
    }
    > div:nth-child(2) {
      grid-area: b;
    }
    > div:nth-child(3) {
      grid-area: c;
    }
    > div:nth-child(4) {
      grid-area: d;
    }
    > div:nth-child(5) {
      grid-area: e;
    }
    > div:nth-child(6) {
      grid-area: f;
    }
    > div:nth-child(7) {
      grid-area: g;
    }
    > div:nth-child(8) {
      grid-area: h;
    }
  }
`;
