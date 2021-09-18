import React from "react";

function ReviewCard(props) {
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const review = props.review;

  return (
    <div>
      <h2>{title}</h2>
      <img src={banner} alt={`Banner for the movie, ${title}`} />
      <p>
        <i>{`"${review}"`}</i>
      </p>
    </div>
  );
}

export default ReviewCard;
