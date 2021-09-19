import "./WatchListStyle.css";
import React from "react";
import WatchCard from "./WatchCard";

function WatchList(props) {
  // Initialize the watchlist prop variable
  const watchCards = props.toWatch;

  // Called when the user clicks on "remove watched" button.
  // Invokes the parent function to filter out any returned true watched values.
  function removeWatched() {
    props.removeWatched();
  }

  // Called when the user clicks on "remove all" button.
  // Invokes the parent function to reset the state of watchlist back to default.
  function removeAll() {
    props.removeAll();
  }

  function checkList() {
    if (watchCards.length < 1 && watchCards.banner === undefined) {
      return (
        <div>
          <h1 className="empty">Oh no, it's Empty!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button className="removeButton" onClick={removeAll}>
            Remove All
          </button>
          <button className="removeButton" onClick={removeWatched}>
            Remove Watched
          </button>
        </div>
      );
    }
  }

  return (
    <div className="watchListContainer">
      {checkList()}
      <div className="cardContainer">
        {watchCards.map((mov, index) => {
          return (
            <WatchCard
              key={index}
              id={mov.id}
              title={mov.name}
              banner={mov.banner}
              watched={mov.watched}
              review={mov.review}
              posted={mov.posted}
              edit={props.edit}
              post={props.post}
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
