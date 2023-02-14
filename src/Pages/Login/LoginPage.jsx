import React from "react";
import { useLoginStore } from "./Login/useLoginStore";
import Login from "./Login/Login";
import { Page } from "../../Styles/PageTemplate/PageTwo";
import { StyledLoginPage } from "./LoginPage.Styled";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import appService from "../../Components/App/Appservices/AppService";

export const LoginPage = () => {
  const { loggedIn, username } = useLoginStore();
  const { state: allReviews } = useGetApiDataFromEndpoint("reviews", "items");
  const { userInfo } = useLoginStore();

  const myReviews = loggedIn && allReviews.filter(
    (item) => parseInt(item.user_id, 10) === userInfo.user_id
  );

  const editComment = () => {

  }
  const deleteComment = async (id) => {
  /*   try {
      const result = await appService.Remove("reviews", id);
    } catch (error) {
      console.error(error);
    } */
  };
  console.log("mine reviews", myReviews);
  return (
    <Page title={username + " er logget ind"}>
      <StyledLoginPage>
        <h2>Administration</h2>
        {loggedIn ?
        <section>
          <h3>Anmeldelser</h3>
          <table>
            <thead>
              <tr>
                <th>Titel</th>
                <th>Dato</th>
                <th>Handling</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.created}</td>
                  <td>
                    <button onClick={editComment} className="edit">Rediger</button>
                    <button onClick={deleteComment(item.id)}className="delete">Slet</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </section>
        : <p>Du er ikke logget ind</p>}
        <Login />
      </StyledLoginPage>
    </Page>
  );
};
