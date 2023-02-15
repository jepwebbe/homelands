import React, { useEffect, useState } from "react";
import { useLoginStore } from "./Login/useLoginStore";
import Login from "./Login/Login";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { StyledLoginPage } from "./LoginPage.Styled";
import appService from "../../Components/App/Appservices/AppService";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const { loggedIn, username } = useLoginStore();
  const [allReviews, setAllReviews] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);
  const { userInfo } = useLoginStore();
  const {
    register, // register input with validation
    handleSubmit, // handle the form submit
    reset,
    formState: { errors }, // form errors
  } = useForm();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.Get("reviews");
        setAllReviews(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [deleteCount]);

  const myReviews =
    loggedIn &&
    allReviews.filter(
      (item) => parseInt(item.user_id, 10) === userInfo.user_id
    );

  const onSubmit = async (data) => {
    const postData = {
      content: data.comment,
      active: true,
      id: data.id,
    };
    try {
      const response = await appService.Update(
        "reviews",
        postData.id,
        postData
      );
      if (response.status) {
        console.log(response.data);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteComment = async (id) => {
    try {
      await appService.Remove("reviews", id);
      setDeleteCount(deleteCount + 1);
    } catch (error) {
      console.error(error);
    }
  };
  const [displayEdit, setDisplayEdit] = useState(false);
  const toggleEdit = () => {
    displayEdit ? setDisplayEdit(false) : setDisplayEdit(true);
  };
  return (
    <PageTwo title={username + " er logget ind"}>
      <StyledLoginPage>
        <h2>Administration</h2>
        {loggedIn ? (
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
                  <React.Fragment key={i}>
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.created}</td>
                      <td>
                        <button onClick={() => toggleEdit()} className="edit">
                          Rediger
                        </button>
                        <button
                          onClick={() => deleteComment(item.id)}
                          className="delete"
                        >
                          Slet
                        </button>
                      </td>
                    </tr>
                    {displayEdit ? (
                      <tr className="edit">
                        <td>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                              type="hidden"
                              {...register("id")}
                              id="id"
                              value={item.id}
                            />
                            <textarea
                              value={item.content}
                              type="text"
                              {...register("comment", { required: true })}
                            />
                            <input
                              className="submit"
                              type="submit"
                              value="Send"
                            />
                          </form>
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </section>
        ) : (
          <p>Du er ikke logget ind</p>
        )}
        <Login />
      </StyledLoginPage>
    </PageTwo>
  );
};
