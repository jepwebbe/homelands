import React, { useState } from "react";
import useGetApiDataFromEndpoint from "../../../Hooks/useGetApiDataFromEndpoint";
import AddReview from "./AddReview";
import { StyledReview } from "./Review.Styled";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const Review = () => {
  const { state: reviews } = useGetApiDataFromEndpoint("reviews", "items");
  const [showAddReview, setShowAddReview] = useState(false);
  const handleClick = () => {
    showAddReview ? setShowAddReview(false) : setShowAddReview(true);
  };
  // Here, I create a new array and sort it from high to low, parsing to number before
  const sortedReviews = reviews.sort(
    (a, b) => parseInt(b.num_stars, 10) - parseInt(a.num_stars, 10)
  );
  // Here i extract the top rating comments, using the parseInt and filter function
  const topReviews = sortedReviews.filter(
    (review) => parseInt(review.num_stars, 10) === 5
  );
  // And here i extract a single random comment to display
  const ranTopReview =
    topReviews[Math.floor(Math.random() * topReviews.length)];
  // First convert the Unix timestamp
  const date = new Date(ranTopReview?.created * 1000);
  const months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];
  // Uses methods to extract month and year
  const formattedDate = `${months[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <StyledReview>
      <h2>Det siger kunderne...</h2>
      <article>
        <h3>{ranTopReview?.title}</h3>
        <p>"{ranTopReview?.content}"</p>
        <p>
          <span>
            {ranTopReview?.user.firstname} {ranTopReview?.user.lastname},{" "}
            {formattedDate}
          </span>
        </p>
        {!showAddReview ? (
          <button className="showbutton" onClick={handleClick}>
            <IoIosArrowBack />
          </button>
        ) : (
          <button className="hidebutton" style={{ transform: showAddReview ? 'translateX(0)' : 'translateX(100%)' }} onClick={handleClick}>
            <RxCross2 className="slide-in show"/>
          </button>
        )}
        <div className="add-review" style={{ transform: showAddReview ? 'translateX(0)' : 'translateX(100%)' }}>
          {showAddReview && <AddReview  className="slide-in show" />}
        </div>
      </article>
    </StyledReview>
  );
};
