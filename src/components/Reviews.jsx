import React from "react";
import ReviewsCard from "./ReviewCard";

function Reviews(props) {
  const reviews = props.postedReviews;

  if (reviews.length < 1) {
    return <h1>No</h1>;
  } else {
    return reviews.map((post, index) => {
      return (
        <ReviewsCard
          key={index}
          id={post.id}
          title={post.name}
          banner={post.banner}
          review={post.review}
        />
      );
    });
  }
}

export default Reviews;
