import React from "react";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { Page } from "../../Styles/PageTemplate/Page";
import { Review } from "./Review/Review";
import { Employees } from "./Employees";
import Hero from "./Hero/Hero";
import { RandomHouses } from "./RandomHouses";
import { StyledHome } from "./Home.Styled";

const Home = () => {
const {state: heroImages } = useGetApiDataFromEndpoint("images", "items")

const imageData = heroImages.map(item => {
  return item.image[1];
});

  return (
    <Page title="Hjem" description="Dette er hjem">
      <StyledHome>
        <Hero slides={imageData}  />
        <RandomHouses />
        <Review />
        <Employees />
      </StyledHome>
    </Page>
  );
};

export default Home;
