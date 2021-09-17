/* eslint-disable */
import React, { useState, useEffect } from "react";
import RecommendedMov from "./RecommendedMov";

function RecommendedList(props) {
  const BASE_URL = "https://hub.dummyapis.com/vj/wzGUkpZ#";
  const [recommended, setRecommended] = useState([{}]);

  useEffect(async () => {
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
        "Error returning data from the server, check your connection"
      );
    }
  }, []);

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
        "Error returning data from the server, check your connection"
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
    <div>
      <h2>Recommended List</h2>
      <div>
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
      <button onClick={handleSuggestCall}>See More Suggestions</button>
    </div>
  );
}

export default RecommendedList;
