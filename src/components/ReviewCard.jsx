import React from "react";

function ReviewCard(props) {
  const title = props.title;
  const banner = props.banner;
  const review = props.review;

  return (
    <div className="reviewCard">
      <div className="reviewHeading">
        <h2>{title}</h2>
      </div>
      <div className="reviewBanner">
        <img src={banner} alt={`Banner for the movie, ${title}`} />
      </div>
      <div className="reviewPost">
        <p>
          <i>{`"${review}"`}</i>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
