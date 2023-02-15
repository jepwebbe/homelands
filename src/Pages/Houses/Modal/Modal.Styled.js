import styled from 'styled-components'

export const StyledModal = styled.div`
display: ${(props) => props.showModal};
position: fixed;
z-index: 1000;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
overflow: auto;
background-color: rgba(0,0,0,0.5);
>div{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 40px;
    margin: auto;
    width: 80vw;
    >img {
        width: 100%;
        height: auto;
    }
}
.close {
    border-radius: 50%;
    position: absolute;
    right: 0.5rem;
    top: 2rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
    color: #333;
    svg {
        font-size: 1.5rem;
        color: white;
    }
    &:hover,
    &:focus {
        background-color: #ccc;
        color: #fff;
        cursor: pointer;
    }
}
`