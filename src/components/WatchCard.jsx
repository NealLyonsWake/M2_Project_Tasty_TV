import React from "react";
import "./WatchCardStyle.css";

function WatchCard(props) {
  // Initalize variables from props
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const watched = props.watched;
  const review = props.review;
  const posted = props.posted;

  // Setup handle toggle function for watched movie if the movie has an entry.
  // Check or uncheck the watched checkbox depending on if watched is true or false.
  if (props.banner !== undefined) {
    const handleToggle = () => {
      props.toggleWatched(id, watched);
    };

    // Delete a single movie when user clicks on the "delete" button.
    // Parent function invoked inside this function through props.
    function deleteSingleMov() {
      props.deleteSingleMov(id);
    }

    // Invoked whenever the user types anything in the textarea element.
    // Invokes the parent function to update the state of the review value.
    function onEdit(e) {
      props.edit(id, e.target.value);
    }

    // Invoked when the user clicks on the "post" / "edit" button.
    // Invokes the parent function to update the state of review posts.
    function onPost() {
      props.post(id, review, posted, title, banner);
    }

    // Checks if the textarea should be enabled or disabled on loadup.
    // If a review has been posted for a particular movie the textarea would be disabled on load up.
    const handlePosted = () => {
      return posted;
    };

    // Checks if a movie review has already been reviewed and sets the button text to edit if so.
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
