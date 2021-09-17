import React from "react";

function RecommendedMov(props) {
  const id = props.id;
  const title = props.title;
  const banner = props.banner;
  const watched = props.watched;

  function handleClickAddMov() {
    props.onAdd(id, title, banner, watched);
    props.onRemove(id);
  }

  if (props.banner !== undefined) {
    return (
      <div>
        <img src={banner} alt={`Banner for the movie, ${title}`} />
        <button onClick={handleClickAddMov}>+</button>
        <h2>{title}</h2>
      </div>
    );
  } else {
    return null;
  }
}

export default RecommendedMov;
