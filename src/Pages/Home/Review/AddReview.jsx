import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import appService from "../../../Components/App/Appservices/AppService";
import { useLoginStore } from "../../Login/Login/useLoginStore";
import { StyledAddReview } from "./AddReview.Styled";

const AddReview = () => {
  const { loggedIn, userInfo } = useLoginStore();
  
  // Destructure form methods from useForm
  const {
    register, // register input with validation
    handleSubmit, // handle the form submit
    reset,
    formState: { errors }, // form errors
  } = useForm();

  // Submits the data from the form to the properties required by the api
  const onSubmit = async (data) => {
    const postData = {
      title: data.title,
      content: data.comment,
      user_id: data.user_id,
      num_stars: data.stars,
      active: true,
    };
    try {
      const response = await appService.Create("reviews", postData);
      if (response.status) {
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loggedIn ? (
        <StyledAddReview onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            {...register("user_id", { value: "" })}
            value={userInfo?.user_id ?? ""}
          />
          {errors.title?.type === "required" && <p>FORKERT</p>}
          <div>
            <label htmlFor="title">Titel:</label>
            <label htmlFor="stars">Rating:</label>
            <label htmlFor="comment">Anmeldelse:</label>
            <input
              className="title"
              type="text"
              {...register("title", { required: true })}
            />
            <input
              className="stars"
              type="text"
              {...register("stars", { required: true })}
            />
            <textarea
              className="comment"
              {...register("comment", { required: true })}
              id="comment"
              rows="1"
            ></textarea>
            <input className="submit" type="submit" value="Send" />
          </div>
        </StyledAddReview>
      ) : (
        <p>Log ind for at kommentere</p>
      )}
    </>
  );
};

export default AddReview;
