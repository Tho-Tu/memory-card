import { useEffect, useState } from "react";
import "../styles/game.css";
import { pokemonList, shuffle } from "../assets/cardList";
import Card from "./Card";

import Score from "./Score";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [indexTracker, setIndexTracker] = useState<number[]>([]);
  const [endGame, setEndGame] = useState(false);

  const handleAddScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleResetScore = () => setScore(0);

  const handleBestScore = (score: number) => setBestScore(score);

  const handleIndexTracker = (index: number) => {
    setIndexTracker((prevList) => [...prevList, index]);
    console.log(indexTracker);
  };

  const handleEndGame = (boolean: boolean) => {
    setEndGame(boolean);
  };

  // end game logic
  useEffect(() => {
    if (score >= pokemonList.length) {
      setEndGame(true);
    }
  }, [score]);

  return (
    <div className="content">
      <Score
        score={score}
        bestScore={bestScore}
        endGame={endGame}
        handleResetScore={handleResetScore}
        handleBestScore={handleBestScore}
        handleEndGame={handleEndGame}
      />
      <div className="card-list">
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            index={pokemon.id}
            pokemonName={pokemon.name}
            handleAddScore={handleAddScore}
            handleIndexTracker={handleIndexTracker}
          />
        ))}
      </div>
    </div>
  );
}
