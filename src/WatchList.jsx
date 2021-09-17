import React from "react";
import WatchCard from "./WatchCard";

function WatchList(props) {
  const watchCards = props.toWatch;

  function removeWatched() {
    props.removeWatched();
  }

  function removeAll() {
    props.removeAll();
  }

  function checkList() {
    if (watchCards.length < 1 && watchCards.banner === undefined) {
      return (
        <div>
          <h1>Empty</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={removeAll}>Remove All</button>
          <button onClick={removeWatched}>Remove Watched</button>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>Watch List</h2>

      {checkList()}
      <div>
        {watchCards.map((mov, index) => {
          return (
            <WatchCard
              key={index}
              id={mov.id}
              title={mov.name}
              banner={mov.banner}
              watched={mov.watched}
              review={mov.review}
              edit={props.edit}
              toggleWatched={props.toggleWatched}
              deleteSingleMov={props.deleteSingleMov}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WatchList;
