import styled from "styled-components";

export const BgStyled = styled.div`
.headerBg {
    position: absolute;
    top: 0;
    height: 3rem;
    background-color: black;
    z-index: 1;
    width: 100vw;
}
  .triangleOne {
    width: 0px;
    height: 0px;
    display: inline-block;
    border-style: solid;
    border-width: 5rem 35vw 0 0;
    border-color: black transparent transparent transparent;
    transform: rotate(0deg);
    position: relative;
    top: 3rem;
  }
  .triangleTwo {
    display: inline-block;
    position: absolute;
    top: 3rem;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 65vw 5rem 1rem;
    border-color: transparent black transparent transparent;
    transform: rotate(0deg);

  }
`;
