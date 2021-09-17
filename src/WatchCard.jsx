import React from "react";

function WatchCard(props) {
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const watched = props.watched;
  const review = props.review;

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

    return (
      <div>
        <img src={banner} alt={`Banner for the movie, ${title}`} />

        <label>
          <input type="checkbox" checked={watched} onChange={handleToggle} />
          Watched
        </label>
        <button onClick={deleteSingleMov}>Delete</button>
        <h2>{title}</h2>
        <label>
          Your Review
          <textarea onChange={onEdit} value={review}></textarea>
        </label>
      </div>
    );
  } else {
    return null;
  }
}

export default WatchCard;
