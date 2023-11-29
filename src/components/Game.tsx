import { useState } from "react";
import "../styles/game.css";
import { pokemonList, shuffle } from "../assets/cardList";
import Card from "./Card";

import Score from "./Score";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleAddScore = () => setScore((prevScore) => prevScore + 1);

  const handleResetScore = () => setScore(0);

  const handleBestScore = () => setBestScore(score);

  return (
    <div className="content">
      <Score score={score} bestScore={bestScore} />
      <div className="card-list">
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemonName={pokemon.name}
            handleAddScore={handleAddScore}
          />
        ))}
      </div>
    </div>
  );
}
