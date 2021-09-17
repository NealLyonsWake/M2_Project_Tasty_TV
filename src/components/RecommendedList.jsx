/* eslint-disable */
import "./RecommendedListStyle.css";
import React, { useState, useEffect } from "react";
import RecommendedMov from "./RecommendedMov";

function RecommendedList(props) {
  const BASE_URL = "https://hub.dummyapis.com/vj/wzGUkpZ#";
  const [recommended, setRecommended] = useState([{}]);

  useEffect(() => {
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
  }, []);

  function handleRecoRequest() {
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    handleSuggestCall();
    // The below is cited from https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

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
      // action if rejected if above fails
      return alert(
        "Error returning data from the server, check your internet connection"
      );
    }
  };

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
