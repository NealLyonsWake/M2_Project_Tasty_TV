import React from "react";
import WatchCard from "./WatchCard";

function WatchList(props) {
  const watchCards = props.toWatch;

  return (
    <div>
      <h2>Watch List</h2>

      <div>
        <button>Remove All</button>
        <button>Remove Watched</button>
      </div>
      <div>
        {watchCards.map((mov, index) => {
          return (
            <WatchCard
              key={index}
              id={mov.id}
              title={mov.name}
              banner={mov.banner}
              watched={mov.watched}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WatchList;
