import { createGlobalStyle } from "styled-components";
import Odibee from "../assets/fonts/odibeeSansRegular.otf";
import Trebuc from "../assets/fonts/trebuc.ttf";
import TrebucBd from "../assets/fonts/trebucbd.ttf";
import TrebucBi from "../assets/fonts/trebucbi.ttf";
import TrebucIt from "../assets/fonts/trebucit.ttf";


// GlobalStyles for the styled-components that add the standard values site-wide
export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Odibee";
    src: local("Odibee"),
    url(${Odibee}) format('opentype');
}
@font-face {
    font-family: "Trebuc";
    src: local("Trebuc"),
    url(${Trebuc}) format('truetype');
}
@font-face {
    font-family: "Trebuc";
    src: local("TrebucBd"),
    url(${TrebucBd}) format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: "Trebuc";
    src: local("TrebucBi"),
    url(${TrebucBi}) format('truetype');
    font-weight: bold;
    font-style: italic;
}
@font-face {
    font-family: "Trebuc";
    src: local("TrebucIt"),
    url(${TrebucIt}) format('truetype');
    font-style: italic;
}
* {
    box-sizing: border-box;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
}
body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: "Trebuc";
}
#root {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "header header" "main main" "footer footer";
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
li {
    list-style-type: none;
}
a {
    text-decoration: none;
}
header a, h1 {
    font-family: "Odibee";
}
`;
