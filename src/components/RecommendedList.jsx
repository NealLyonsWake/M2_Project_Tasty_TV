/* eslint-disable */
import "./RecommendedListStyle.css";
import React, { useState, useEffect } from "react";
import RecommendedMov from "./RecommendedMov";

function RecommendedList(props) {
  // Declare base URL for handling the API
  const BASE_URL = "https://hub.dummyapis.com/vj/wzGUkpZ#";
  // Declare state of recommended movie list
  const [recommended, setRecommended] = useState([{}]);

  // Call the API call function with the page mounts.
  // Limit to one call by using an empty array.
  useEffect(() => {
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
  }, []);

  // Call when the user clicks on the "spin for more" button
  function handleRecoRequest() {
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    // The below is cited from https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
    // Smooth scroll to the bottom of the page.
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  // The actual call to the API, called when either useEffect or handleRecoRequest is invoked.
  // API handled inside an async function with try or catch to handle the response or any response error.
  const handleSuggestCall = async () => {
    try {
      const res = await axios.get(BASE_URL);
      const [...movieData] = res.data;

      movieData.forEach((feature) => {
        setRecommended((prevMovies) => {
          return [
            ...prevMovies,
            {
              id: feature.id,
              name: feature.name,
              banner: feature.bannerUrl,
              watched: feature.watched
            }
          ];
        });
      });
    } catch (e) {
      // Action if rejected if above fails
      return alert(
        "Error returning data from the server, check your internet connection"
      );
    }
  };

  // Called from the child RecommendedMov component using props.
  // This will be invoked when a user adds a movie to their watch list and this will remove the movie from the recommended list.
  function onRemove(id) {
    setRecommended((prev) => {
      return prev.filter((index) => {
        return index.id !== id;
      });
    });
  }

  return (
    <div className="content-container">
      <div className="recoList">
        {recommended.map((mov, index) => {
          return (
            <RecommendedMov
              key={index}
              id={mov.id}
              title={mov.name}
              banner={mov.banner}
              watched={mov.watched}
              onAdd={props.addMov}
              onRemove={onRemove}
            />
          );
        })}
      </div>
      <button className="APICall" onClick={handleRecoRequest}>
        Spin For More
      </button>
    </div>
  );
}

export default RecommendedList;
