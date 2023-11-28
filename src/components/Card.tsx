import { useState } from "react";
import "../styles/card.css";


function Card({ pokemonName }) {
  const cardImage = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    mode: "cors",
  });
  return (
    <button>
      <img src={cardImage}></img>
      <div>{text}</div>
    </button>
  );
}

export default Card;

async function getPokemonSprite(pokemonName) {
    const pokemon = await
}