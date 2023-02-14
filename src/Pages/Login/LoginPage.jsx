import React from "react";
import { useLoginStore } from "./Login/useLoginStore";
import Login from "./Login/Login";
import { Page } from "../../Styles/PageTemplate/Page";
import { StyledLoginPage } from "./LoginPage.Styled";

export const LoginPage = () => {
  const { username } = useLoginStore();
  return (
    <Page title={username + " er logget ind"}>
      <StyledLoginPage>
        <Login />
      </StyledLoginPage>
    </Page>
  );
};
