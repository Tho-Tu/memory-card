import { useEffect, useState } from "react";
import "../styles/game.css";
import { pokemonList, shuffle } from "../assets/cardList";
import Card from "./Card";

import Score from "./Score";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [indexTracker, setIndexTracker] = useState<number[]>([
    ...Array(pokemonList.length).keys(),
  ]);
  const [endGame, setEndGame] = useState(false);

  const handleAddScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleResetScore = () => setScore(0);

  const handleBestScore = (score: number) => setBestScore(score);

  // indexTracker methods
  const handleIndexTracker = (deleteIndex: number) => {
    const update = indexTracker.filter((index) => index !== deleteIndex);
    setIndexTracker(update);
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
