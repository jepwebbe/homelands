import React from "react";
import { Page } from "../../Styles/PageTemplate/Page";
import { HomeStyled } from "./Styled.Home";

const Home = () => {
  return (
    <Page title="Hjem" description="Dette er hjem">
      <HomeStyled>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </HomeStyled>
    </Page>
  );
};

export default Home;
