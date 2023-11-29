import { useState } from "react";
import "../styles/game.css";
import { pokemonList, shuffle } from "../assets/cardList";
import Card from "./Card";

import Score from "./Score";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [indexTracker, setIndexTracker] = useState([]);
  const [endGame, setEndGame] = useState(false);

  const handleAddScore = () => {
    score !== pokemonList.length && setScore((prevScore) => prevScore + 1);
  };

  const handleResetScore = () => setScore(0);

  const handleBestScore = () => setBestScore(score);

  const handleIndexTracker = (index) => {
    setIndexTracker((prevList) => prevList);
  };

  const handleEndGame = () => {
    score === pokemonList.length ? setEndGame(true) : setEndGame(false);
  };

  return (
    <div className="content">
      <Score
        score={score}
        bestScore={bestScore}
        endGame={endGame}
        handleResetScore={handleResetScore}
        handleBestScore={handleBestScore}
      />
      <div className="card-list">
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemonName={pokemon.name}
            handleAddScore={handleAddScore}
            handleEndGame={handleEndGame}
          />
        ))}
      </div>
    </div>
  );
}
