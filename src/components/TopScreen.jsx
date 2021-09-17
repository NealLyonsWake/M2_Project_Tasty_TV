import Logo from "../img/Logo.png";
import "./TopScreenStyle.css";
import React, { useState } from "react";
import RecommendedList from "./RecommendedList";
import WatchList from "./WatchList";

function TopScreen() {
  const [heading, setHeading] = useState("Recommended for You");
  const [watchList, setWatchList] = useState([]);

  function handleHeading(e) {
    setHeading(e.target.value);
  }

  function onAdd(newId, newTitle, newBanner, newWatched) {
    setWatchList((prevWatch) => {
      return [
        ...prevWatch,
        {
          id: newId,
          name: newTitle,
          banner: newBanner,
          watched: newWatched,
          review: ""
        }
      ];
    });
  }

  // Managing watch list movies (toggle watched)
  const handleWatched = (movId, watched) => {
    const watchedMovies = watchList.map((m) => {
      if (m.id === movId) {
        m.watched = !watched;
      }
      return m;
    });

    setWatchList(watchedMovies);
  };

  // Managing watch list movies (delete watched)
  const removeWatched = () => {
    if (watchList.length === 0) {
      window.alert("No tasks to remove");
      return;
    }

    setWatchList(watchList.filter((m) => m.watched === false));
  };

  // Managing watch list movies (delete a single movie)
  function deleteSingleMov(id) {
    setWatchList((prev) => {
      return prev.filter((index) => {
        return index.id !== id;
      });
    });
  }

  // Managing watch list movies (delete all movies)
  function removeAll() {
    setWatchList([]);
  }

  // Managing watch list movies (edit review)
  const handleEdit = (movId, movReview) => {
    const editedMovies = watchList.map((m) => {
      if (m.id === movId) {
        m.review = movReview;
      }
      return m;
    });

    setWatchList(editedMovies);
  };

  return (
    <div>
      <header>
        <div>
          <img className="logo" src={Logo} alt="Tasty TV logo" />
        </div>
        <nav>
          <button
            className="navButton"
            onClick={handleHeading}
            value="Recommended for You"
          >
            Home
          </button>
          <button
            className="navButton"
            onClick={handleHeading}
            value="Watch List"
          >
            Watch List
          </button>
        </nav>
        <h2>{heading}</h2>
      </header>

      {heading === "Recommended for You" ? (
        <RecommendedList addMov={onAdd} />
      ) : (
        <WatchList
          toWatch={watchList}
          toggleWatched={handleWatched}
          removeWatched={removeWatched}
          edit={handleEdit}
          deleteSingleMov={deleteSingleMov}
          removeAll={removeAll}
        />
      )}
    </div>
  );
}

export default TopScreen;
