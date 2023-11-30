import { useEffect } from "react";
import "../styles/score.css";

type scoreProps = {
  score: number;
  bestScore: number;
  endGame: boolean;
  handleResetScore: () => void;
  handleBestScore: (score: number) => void;
  handleEndGame: (boolean: boolean) => void;
};

export default function Score({
  score,
  bestScore,
  endGame,
  handleResetScore,
  handleBestScore,
  handleEndGame,
}: scoreProps) {
  useEffect(() => {
    if (endGame && score > bestScore) {
      handleBestScore(score);
    }
  }, [endGame]);
  return (
    <>
      <div className="score">
        <h2>Don't click the same pokemon twice!</h2>
        <div>Current Score: {score}/9</div>
        <div>Best Score: {bestScore}/9</div>
        <br></br>
        {endGame && <h2>You Win!</h2>}
        {endGame && (
          <button
            onClick={() => {
              handleResetScore();
              handleEndGame(false);
            }}
          >
            Play again?
          </button>
        )}
      </div>
    </>
  );
}
