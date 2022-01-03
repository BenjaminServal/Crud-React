import React, { useEffect, useState, useMemo } from "react";
import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState("");

  const fetchGame = () => {
    fetch(
      "https://api.rawg.io/api/games?key=21dd3ea253de44a6bc6c827eedc10926&page_size=40"
    )
      .then(resp => resp.json())
      .then(({ results }) => setGames(results));
  };

  const handleChange = e => {
    setFilterGames(e);
  };

  const filteredGame = useMemo(() => {
    let filtered = games.filter(
      game => game.name.toLowerCase().indexOf(filterGames.toLowerCase()) !== -1
    );
    return filtered;
  });

  useEffect(() => {
    fetchGame();
  }, []);

  return (
    <div className="home">
      <SearchBar completion={handleChange} />
      <GameList games={filteredGame} />
    </div>
  );
};

export default Home;
