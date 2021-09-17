import React from "react";

function WatchCard(props) {
  const id = props.id;
  const title = props.title;
  const banner = props.banner;

  if (props.banner !== undefined) {
    return (
      <div>
        <img src={banner} alt={`Banner for the movie, ${title}`} />

        <label for="scales">
          {" "}
          <input type="checkbox" />
          Watched
        </label>
        <button>Delete</button>
        <h2>{title}</h2>
      </div>
    );
  } else {
    return null;
  }
}

export default WatchCard;
