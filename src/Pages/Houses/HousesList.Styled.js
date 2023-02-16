import styled from 'styled-components'

export const StyledHousesList = styled.section`
>h2 {
    grid-area: a;
    padding: 0 ${props => props.theme.space.sidePadding};
}
>div {
    grid-area: b;
    >a {
        color: black;
    }
}
`