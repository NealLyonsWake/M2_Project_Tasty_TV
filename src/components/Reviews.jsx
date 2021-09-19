import "./Reviews.css";
import React from "react";
import ReviewsCard from "./ReviewCard";

function Reviews(props) {
  const reviews = props.postedReviews;

  if (reviews.length < 1) {
    return (
      <div className="emptyReview">
        <h1 className="emptyTitle">Oops, there's no review!</h1>
        <p>Add a movie to your watch list and post a review</p>
      </div>
    );
  } else {
    return reviews.map((post, index) => {
      return (
        <div className="reviewsContainer">
          <ReviewsCard
            key={index}
            title={post.name}
            banner={post.banner}
            review={post.review}
          />
        </div>
      );
    });
  }
}

export default Reviews;
