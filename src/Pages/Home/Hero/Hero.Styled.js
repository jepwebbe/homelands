import styled from 'styled-components'

export const StyledHero = styled.div`
margin-top: -8rem;
z-index: 1;
@media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: -5rem;
}
@media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-top: -2rem;
}
`