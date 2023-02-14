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
    margin: 4rem;
    gap: 0.5rem;
    article {
      padding: 0.5rem;
      border: 1px solid black;
      img {
        max-height: 10rem;
        margin: 0 auto;
      }
      p {
      }
    }
  }
`;
