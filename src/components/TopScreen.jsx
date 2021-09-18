import Logo from "../img/Logo.png";
import "./TopScreenStyle.css";
import React, { useState } from "react";
import RecommendedList from "./RecommendedList";
import WatchList from "./WatchList";
import Reviews from "./Reviews";

function TopScreen() {
  // Declare states
  const [heading, setHeading] = useState("Recommended for You");
  const [watchList, setWatchList] = useState([]);
  const [postedReviews, setPostedReviews] = useState([]);

  // Set the appropriate heading when the user clicks a navigation button
  function handleHeading(e) {
    setHeading(e.target.value);
  }

  // Call the appropriate component when the heading is called
  function returnComponent() {
    if (heading === "Recommended for You") {
      return <RecommendedList addMov={onAdd} />;
    } else if (heading === "Watch List") {
      // Call the wathc list
      return (
        <WatchList
          toWatch={watchList}
          toggleWatched={handleWatched}
          removeWatched={removeWatched}
          edit={handleEdit}
          post={handlePost}
          deleteSingleMov={deleteSingleMov}
          removeAll={removeAll}
        />
      );
    } else {
      // Call the review list to be populated
      return <Reviews postedReviews={postedReviews} />;
    }
  }

  // Add a movie to the watch list
  function onAdd(newId, newTitle, newBanner, newWatched) {
    setWatchList((prevWatch) => {
      return [
        ...prevWatch,
        {
          id: newId,
          name: newTitle,
          banner: newBanner,
          watched: newWatched,
          review: "",
          posted: false
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

  // Managing watch list movies (delete all atched movies)
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

  // Update the state of the review comment box in the watch list while the user is typing
  const handleEdit = (movId, movReview) => {
    const editedMovies = watchList.map((m) => {
      if (m.id === movId) {
        m.review = movReview;
      }
      return m;
    });

    setWatchList(editedMovies);
  };

  // Update the state of the posted boolean to post the user's review or allow the user to edit their comments on their watch list.
  const handlePost = (movId, movReview, movPosted, movTitle, movBanner) => {
    if (movReview === "") {
      return alert("Oops, there is no review to post! Write a review.");
    }
    if (!movPosted) {
      alert("Nice One! Your review was posted!");
      // Call the onPost function if there is actually a review to post
      onPost(movId, movTitle, movBanner, movReview);
    }
    const postedMovies = watchList.map((m) => {
      if (m.id === movId) {
        m.posted = !movPosted;
      }
      return m;
    });

    setWatchList(postedMovies);
  };

  // Function to update the state of posted reviews to the reviews component
  function onPost(movId, movTitle, movBanner, movReview) {
    setPostedReviews((prevPost) => {
      return [
        ...prevPost,
        {
          id: movId,
          name: movTitle,
          banner: movBanner,
          review: movReview
        }
      ];
    });
  }

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
          <button className="navButton" onClick={handleHeading} value="Reviews">
            Reviews
          </button>
        </nav>
        <h2>{heading}</h2>
      </header>
      {returnComponent()}
    </div>
  );
}

export default TopScreen;
