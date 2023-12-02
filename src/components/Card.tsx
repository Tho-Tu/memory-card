import { useState, useEffect } from "react";
import "../styles/card.css";

type cardProps = {
  pokemonName: string;
  index: number;
  indexTracker: number[];
  handleAddScore: () => void;
  handleIndexTracker: (index: number) => void;
  handleEndGame: (boolean: boolean) => void;
};

export default function Card({
  pokemonName,
  index,
  indexTracker,
  handleAddScore,
  handleIndexTracker,
  handleEndGame,
}: cardProps) {
  const [cardImage, setCardImage] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCardImage(data.sprites.other["official-artwork"]["front_default"]);
      });
  }, [pokemonName]);

  return (
    <button
      type="button"
      onClick={() => {
        handleIndexTracker(index);
        handleAddScore();
        if (!indexTracker.includes(index)) {
          handleEndGame(true);
        }
      }}
    >
      <img src={cardImage}></img>
      <div>{pokemonName}</div>
    </button>
  );
}
