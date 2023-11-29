import "../styles/score.css";

type scoreProps = {
  score: number;
  bestScore: number;
};

export default function Score({ score, bestScore }: scoreProps) {
  return (
    <>
      <div className="score">
        <h2>Don't click the same pokemon twice!</h2>
        <div>Current Score: {score}/9</div>
        <div>Best Score: {bestScore}/9</div>
      </div>
    </>
  );
}
