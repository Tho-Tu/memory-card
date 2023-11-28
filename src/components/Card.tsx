import { useState, useEffect } from "react";
import "../styles/card.css";

type cardProps = {
  pokemonName: string;
  handleAddScore: () => void;
};

export default function Card({ pokemonName, handleAddScore }: cardProps) {
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
    <button type="button" onClick={handleAddScore}>
      <img src={cardImage}></img>
      <div>{pokemonName}</div>
    </button>
  );
}
