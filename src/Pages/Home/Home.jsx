import React from "react";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { Page } from "../../Styles/PageTemplate/Page";
import { Comments } from "./Comments";
import { Employees } from "./Employees";
import Hero from "./Hero/Hero";
import { RandomHouses } from "./RandomHouses";
import { HomeStyled } from "./Styled.Home";

const Home = () => {
const {state: heroImages } = useGetApiDataFromEndpoint("images", "items")

const imageData = heroImages.map(item => {
  return item.image[1];
});
console.log("imageData er", imageData)

  return (
    <Page title="Hjem" description="Dette er hjem">
      <HomeStyled>
        <Hero slides={imageData}  />
        <RandomHouses />
        <Comments />
        <Employees />
      </HomeStyled>
    </Page>
  );
};

export default Home;
