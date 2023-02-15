import styled from 'styled-components'

export const StyledHousesList = styled.section`
padding: 0 ${props => props.theme.space.sidePadding};
h2 {
    grid-area: a;
}
>div {
    grid-area: b;
    >a {
        color: black;
    }
}
`