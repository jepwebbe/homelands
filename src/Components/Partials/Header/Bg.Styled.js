import styled from "styled-components";

export const StyledBg = styled.div`
  height: 100%;
  .headerBg {
    position: absolute;
    top: 0;
    height: 3rem;
    background-color: black;
    z-index: 2;
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
    z-index: 2;
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
    z-index: 2;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    .triangleOne {
      border-width: 3rem 35vw 0 0;
    }
    .triangleTwo {
      border-width: 0 65vw 3rem 1rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    .triangleOne {
      border-width: 2rem 35vw 0 0;
    }
    .triangleTwo {
      border-width: 0 65vw 2rem 1rem;
    }
  }
`;
