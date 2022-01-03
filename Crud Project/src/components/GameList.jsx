import React from "react";
import { useHistory } from "react-router-dom";

const GameList = ({ games }) => {
  let history = useHistory();

  function handleClick(game) {
    history.push({
      pathname: "/GameDetail",
      search: `?id=${game.id}`,
      state: { game: game }
    });
  }

  return (
    <div className="gameList">
      {games.map(game => (
        <div className="gameCard" key={game.id}>
          <div className="imgGame">
            <img src={game.background_image} className="image" alt="img" />
          </div>
          <div className="name">
            <h1>{game.name}</h1>
          </div>
          <div className="released">
            <p>{game.released}</p>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                handleClick(game);
              }}
            >
              En savoir plus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
