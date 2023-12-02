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
  const [randomPokemonList, setRandomPokemonList] = useState(pokemonList);

  const handleAddScore = () => {
    if (!endGame && score < pokemonList.length) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleResetScore = () => setScore(0);

  const handleBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  // indexTracker methods
  const handleIndexTracker = (deleteIndex: number) => {
    const update = indexTracker.filter((index) => index !== deleteIndex);
    setIndexTracker(update);
  };

  const handleResetIndexTracker = () => {
    setIndexTracker([...Array(pokemonList.length).keys()]);
  };

  const handleEndGame = (boolean: boolean) => {
    setEndGame(boolean);
  };

  // end game logic
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      if (score >= pokemonList.length) {
        setEndGame(true);
      }
    }
    return () => {
      ignore = true;
    };
  }, [score, bestScore]);

  // randomly shuffles list when score state changes
  useEffect(() => {
    let ignore = false;
    if (!ignore && !endGame) {
      const randomOrder = shuffle(pokemonList);
      setRandomPokemonList(randomOrder);
    }
    return () => {
      ignore = true;
    };
  }, [score, endGame]);

  return (
    <div className="content">
      <Score
        score={score}
        bestScore={bestScore}
        endGame={endGame}
        handleResetScore={handleResetScore}
        handleEndGame={handleEndGame}
        handleResetIndexTracker={handleResetIndexTracker}
        handleBestScore={handleBestScore}
      />
      <div className="card-list">
        {randomPokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            index={pokemon.id}
            pokemonName={pokemon.name}
            indexTracker={indexTracker}
            handleAddScore={handleAddScore}
            handleIndexTracker={handleIndexTracker}
            handleEndGame={handleEndGame}
          />
        ))}
      </div>
    </div>
  );
}
