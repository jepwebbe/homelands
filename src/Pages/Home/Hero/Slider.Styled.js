import styled from "styled-components";

export const StyledHeading = styled.div`
  position: absolute;
  top: auto;
  left: auto;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-areas: "left center right";
  width: 100%;
  div {
    color: white;
    border-bottom-right-radius: 5rem;
    padding: 0 1rem;
    h2 {
      padding: 1rem;
      margin: 0;
      font-family: "Lobster";
      grid-area: center;
      justify-content: center;
      text-align: center;
      font-size: 3.5rem;
    }
  }
  .leftArrow {
    grid-area: left;
    color: ${props => props.buttonColor};
    transform: scale(2);
    margin-left: 2rem;
    cursor: pointer;
  }
  .rightArrow {
    grid-area: right;
    justify-self: end;
    color: ${props => props.buttonColor};
    transform: scale(2);
    margin-right: 2rem;
    cursor: pointer;
  }
`;

export const SlideImage = styled.img`
  object-fit: fill;
`;

export const ImageWrap = styled.div`
aspect-ratio: ${props => props.aspectRatio};
overflow: hidden;
`

export const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
  }
`;