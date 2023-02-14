import styled from 'styled-components'

export const StyledReview = styled.section`
grid-column: c;
text-align: center;

>article {
    background-color: ${props => props.theme.colors.rosa};
    padding: 1rem 0;
}
`