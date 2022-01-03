import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import CreateComment from "./comments/CreateComment";
import ReadCommentary from "./comments/ReadCommentary";
import { AuthContext } from "../providers/users/UserProvider";

const GameDetail = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const game = location.state.game;
  console.log(game);

  return (
    <div className="gameDetail">
      <Jumbotron>
        <div className="Jumbotron">
          <div className="Title">
            <h1>{game.name}</h1>
          </div>
          <div className="img-detail-game">
            <img src={game.background_image} className="backImage" alt="img" />
          </div>
        </div>
      </Jumbotron>
      <div className="body">
        <div className="rating">
          <h3>Notes du jeu : </h3>
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={game.rating}
          />
          <p>{game.rating}</p>
          <br></br>
        </div>
        <div className="released">
          <h3>Date de sortie : </h3>
          <p>{game.released}</p>
        </div>
        <div className="platforms">
          <h3>Plateformes : </h3>
          <p key={game.platforms.id}>
            {game.platforms.map(p => `${p.platform.name} | `)}
          </p>
        </div>
        <div className="stores">
          <h3>Genre : </h3>
          <p key={game.genres.id}>{game.genres.map(m => `${m.name}  `)}</p>
        </div>
      </div>
      <div className="screenshot">
        <p>
          {game.short_screenshots.map(p => (
            <img
              className="screen"
              key={p.name}
              src={p.image}
              alt="screenshot"
            ></img>
          ))}
        </p>
      </div>
      <div className="gameDetailList">
        <ReadCommentary game={game} />
      </div>
      {currentUser ? (
        <CreateComment game={game} />
      ) : (
        <div className="logToComment">
          <p>Co toi pour commenter</p>
        </div>
      )}
    </div>
  );
};

export default GameDetail;
