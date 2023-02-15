import styled from "styled-components";

export const StyledHouseDetails = styled.section`
  margin-top: -8rem;
  > div:nth-child(1) {
    grid-area: a;
    aspect-ratio: 21/7;
    overflow: hidden;
  }
  div.detailsgrid {
    padding: 0 ${(props) => props.theme.space.sidePadding};
    grid-area: b;
    display: grid;
    width: 100%;
    margin-top: -1.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "a b c" "d e f" "g g h";
    row-gap: 1rem;
    >div {
        padding: 0 1rem;
        p, span {
            margin: 0.3rem 0;
        }
    }
    > div:nth-child(1) {
      grid-area: a;
      background-color: rgba(255, 255, 255, 0.7);
    }
    > div:nth-child(2) {
      grid-area: b;
      background-color: rgba(255, 255, 255, 0.7);
    }
    > div:nth-child(3) {
      grid-area: c;
      background-color: rgba(255, 255, 255, 0.7);
      text-align: right;
      p.price {
        span {
          font-size: 1.5rem;
        }
      }
    }
    > div:nth-child(4) {
      grid-area: d;
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
    > div:nth-child(5) {
      grid-area: e;
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
    > div:nth-child(6) {
      grid-area: f;
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
    > div:nth-child(7) {
      grid-area: g;
    }
    > div:nth-child(8) {
      grid-area: h;
      h3 {
        margin: 0;
      }
    }
  }
`;
