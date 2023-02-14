import styled from 'styled-components'

export const StyledAddReview = styled.form`
display: grid;
background-color: #333333;
padding: 2rem 0;
>div {
display: grid;
grid-template-columns: 1fr 3fr 1fr;
margin: 0 auto;
gap: 0.5rem;
}
.title {
    grid-row: 1;
}
.stars {
    grid-row: 2;
}
label {
    color: white;
    grid-column: 1 / 1 ;
}

input, textarea {
    border: none;
    grid-column: 2 / 2;
}
input[type="submit"] {
    width: 80%;
    border: none;
    grid-column: 3 / 3;
    cursor: pointer;
    background-color: #CCCCCC;
    border-radius: 0.5rem;
}
input[type="submit"]:hover {
    background-color: #666666;
    color: white;
}
`