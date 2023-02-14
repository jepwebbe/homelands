import styled from "styled-components";

export const StyledEmployees = styled.section`
  grid-area: d;
  padding: 0 ${(props) => props.theme.space.sidePadding};
  h2 {
    text-align: center;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: center;
    margin: 0 4rem;
    gap: 0.5rem;
    article {
      padding: 0 0.5rem;
      border: 1px solid black;
      display: grid;

      a {
        grid-area: 1 / 1 / -1 / -1;
        cursor: pointer;
        img {
          max-height: 15rem;
          margin: 0 auto;
        }
      }
      > div {
        grid-area: 1 / 1 / -1 / -1;
        align-self: end;
        background-color: rgba(255, 255, 255, 0.7);
        padding-bottom: 0.5rem;
        > h3 {
          margin: 0;
        }
        > p {
          font-size: 0.8rem;
          margin: 0;
        }
      }
    }
  }
`;
