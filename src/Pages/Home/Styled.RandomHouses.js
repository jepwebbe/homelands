import styled from "styled-components";

export const RandomHousesStyled = styled.div`
  padding: 0 ${(props) => props.theme.space.sidePadding};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  article {
    border: 1px solid black;
    padding: 1rem;

    .imagewrap {
      width: 25rem;
      height: 13rem;
      overflow: hidden;
      img {
      }
    }
  }
`;
