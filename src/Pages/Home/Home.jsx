import React from "react";
import { Page } from "../../Styles/PageTemplate/Page";
import { Comments } from "./Comments";
import { Employees } from "./Employees";
import Hero from "./Hero/Hero";
import { RandomHouses } from "./RandomHouses";
import { HomeStyled } from "./Styled.Home";

const Home = () => {
  return (
    <Page title="Hjem" description="Dette er hjem">
      <HomeStyled>
        <Hero />
        <RandomHouses />
        <Comments />
        <Employees />
      </HomeStyled>
    </Page>
  );
};

export default Home;
