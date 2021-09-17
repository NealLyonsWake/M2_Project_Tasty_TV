import React from "react";
import "./RecommendedMovStyle.css";

function RecommendedMov(props) {
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const watched = props.watched;

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
