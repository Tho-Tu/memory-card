import "../styles/game.css";

type scoreProps = {
  score: number;
  bestScore: number;
};

export default function Score({ score, bestScore }: scoreProps) {
  return (
    <>
      <div>Current Score: {score}/9</div>
      <div>Best Score: {bestScore}/9</div>
    </>
  );
}
