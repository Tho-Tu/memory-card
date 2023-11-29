import "../styles/score.css";

type scoreProps = {
  score: number;
  bestScore: number;
  endGame: boolean;
  handleResetScore: () => void;
  handleBestScore: () => void;
  handleEndGame: () => void;
};

export default function Score({
  score,
  bestScore,
  endGame,
  handleResetScore,
  handleBestScore,
  handleEndGame,
}: scoreProps) {
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
              endGame = false;
              handleResetScore();
              handleEndGame();
            }}
          >
            Play again?
          </button>
        )}
      </div>
    </>
  );
}
