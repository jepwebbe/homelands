import styled from 'styled-components'

export const StyledFooter = styled.footer`
grid-area: footer;
display: grid;
grid-template-columns: 1fr 1fr;
background-color: black;
color: white;
padding: 0 ${props => props.theme.space.sidePadding};
>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-family: "Odibee";
        font-size: 2rem;
        margin: 1rem;
    }
    p {
        font-size: 0.8rem
    }
}
div:last-of-type {
    justify-self: end;
    align-self: center;
    a {
        color: white;
    }
    svg {
        font-size: 2rem;
        margin-left: 1rem;
    }

}
`