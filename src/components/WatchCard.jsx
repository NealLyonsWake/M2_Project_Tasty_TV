import React from "react";
import "./WatchCardStyle.css";

function WatchCard(props) {
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const watched = props.watched;
  const review = props.review;
  const posted = props.posted;

  if (props.banner !== undefined) {
    const handleToggle = () => {
      props.toggleWatched(id, watched);
    };

    function deleteSingleMov() {
      props.deleteSingleMov(id);
    }

    function onEdit(e) {
      props.edit(id, e.target.value);
    }

    function onPost() {
      props.post(id, review, posted, title, banner);
    }

    const handlePosted = () => {
      return posted;
    };

    const postedCheck = () => {
      if (posted) {
        return "Edit";
      } else {
        return "Post";
      }
    };

    return (
      <div className="watchCard">
        <div className="head">
          <h2>{title}</h2>
        </div>
        <div className="banner">
          <img src={banner} alt={`Banner for the movie, ${title}`} />
        </div>

        <div className="buttons">
          <button className="watchButtons">Play</button>
          <button className="watchButtons" onClick={deleteSingleMov}>
            Delete
          </button>
          <label>
            <input type="checkbox" checked={watched} onChange={handleToggle} />
            Watched
          </label>
        </div>
        <div className="review">
          <label>
            Your Movie Review
            <textarea
              onChange={onEdit}
              value={review}
              disabled={handlePosted()}
            ></textarea>
            <button className="editButton" onClick={onPost}>
              {postedCheck()}
            </button>
          </label>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default WatchCard;
