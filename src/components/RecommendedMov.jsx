import React from "react";
import "./RecommendedMovStyle.css";

function RecommendedMov(props) {
  // Initialize the props variables.
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const watched = props.watched;

  // Invoked when the user clicks on one of the "add to watch list" buttons.
  // Invokes the parent onAdd and onRemove functions to add the movie to the watch list and unmount the movie from the recommended list.
  function handleClickAddMov() {
    alert(`Wow, you added the movie ${title} to your watch list!`);
    props.onAdd(id, title, banner, watched);
    props.onRemove(id);
  }

  if (props.banner !== undefined) {
    return (
      <div className="movCard">
        <img src={banner} alt={`Banner for the movie, ${title}`} />
        <button className="addButton" onClick={handleClickAddMov}>
          Add to Watch List
        </button>
        <h4 className="title">{title}</h4>
      </div>
    );
  } else {
    return null;
  }
}

export default RecommendedMov;
