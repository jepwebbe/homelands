import React from "react";
import Login from "../Components/Partials/Login/Login";
import { LoginPageStyled } from "./Styled.LoginPage";
import { useLoginStore } from "../Components/Partials/Login/useLoginStore.js"
import { Page } from "../Styles/PageTemplate/Page";

export const LoginPage = () => {
  const { username } = useLoginStore();
  return (
    <Page title={username + " er logget ind"}>
      <LoginPageStyled>
        <Login />
      </LoginPageStyled>
    </Page>
  );
};
