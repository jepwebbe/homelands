import styled from "styled-components";

export const StyledHouseCard = styled.div`
  padding: 0 ${(props) => props.theme.space.sidePadding};
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.columnWidth}px, 1fr)
  );
  gap: 2rem;
  article {
    padding: 1rem;
    box-shadow: 0 0.1875rem 0.625rem rgb(0 0 0 / 0.2);

    .imagewrap {
      aspect-ratio: 16 / 9;
      overflow: hidden;
      img {
      }
    }
    h2 {
      font-size: 1.15rem;
      font-weight: normal;
    }
    p {
      font-size: 1.15rem;
    }
    .marginBottom {
      margin-bottom: 0;
    }
    .marginTop {
      margin-top: 0;
    }
    .font {
      font-size: 0.8rem;
    }
    div:last-of-type {
      display: flex;
      align-items: center;
      p {
        margin: 0;
        padding: 0;
      }
      .price {
        margin-left: auto;
      }
      > div {
        background-color: ${(props) => props.theme.colors.green};
        width: 1.6rem;
        height: 1.6rem;
        display: grid;
        place-items: center;
        margin-right: 1rem;
        p {
          color: white;
          text-align: center;
        }
      }
    }
  }
  a {
    color: black;
  }
`;
