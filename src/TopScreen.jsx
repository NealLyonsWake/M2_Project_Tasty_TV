import React, { useState, useEffect } from "react";
import RecommendedList from "./RecommendedList";

import WatchList from "./WatchList";

function TopScreen() {
  const [heading, setHeading] = useState("Recommended for You");
  const [watchList, setWatchList] = useState([{}]);

  function handleHeading(e) {
    setHeading(e.target.value);
  }

  function onAdd(newId, newTitle, newBanner, newWatched) {
    setWatchList((prevWatch) => {
      return [
        ...prevWatch,
        { id: newId, name: newTitle, banner: newBanner, watched: newWatched }
      ];
    });
  }

  return (
    <div>
      <h1>TastyTV</h1>
      <button onClick={handleHeading} value="Recommended for You">
        Home
      </button>
      <button onClick={handleHeading} value="Watch List">
        Watch List
      </button>
      {heading === "Recommended for You" ? (
        <RecommendedList addMov={onAdd} />
      ) : (
        <WatchList toWatch={watchList} />
      )}
    </div>
  );
}

export default TopScreen;
