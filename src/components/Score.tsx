import "../styles/score.css";
import { pokemonList } from "../assets/cardList";

type scoreProps = {
  score: number;
  bestScore: number;
  endGame: boolean;
  handleResetScore: () => void;
  handleEndGame: (boolean: boolean) => void;
  handleResetIndexTracker: () => void;
  handleBestScore: () => void;
};

export default function Score({
  score,
  bestScore,
  endGame,
  handleResetScore,
  handleEndGame,
  handleResetIndexTracker,
  handleBestScore,
}: scoreProps) {
  return (
    <>
      <div className="score">
        <h2>Don't click the same pokemon twice!</h2>
        <div>
          Current Score: {score}/{pokemonList.length}
        </div>
        <div>
          Best Score: {bestScore}/{pokemonList.length}
        </div>
        <br></br>
        {endGame && <h2>Your Score: {score}</h2>}
        {endGame && (
          <button
            onClick={() => {
              handleResetScore();
              handleEndGame(false);
              handleResetIndexTracker();
              handleBestScore();
            }}
          >
            Play again?
          </button>
        )}
      </div>
    </>
  );
}
