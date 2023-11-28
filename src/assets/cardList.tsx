type PokemonObject = {
  id: number;
  name: string;
};

export const pokemonList = [
  { id: 0, name: "pikachu" },
  { id: 1, name: "bulbasaur" },
  { id: 2, name: "charmander" },
  { id: 3, name: "squirtle" },
  { id: 4, name: "caterpie" },
  { id: 5, name: "totodile" },
  { id: 6, name: "cyndaquil" },
  { id: 7, name: "chikorita" },
  { id: 8, name: "taillow" },
];

export function shuffle(array: PokemonObject[]) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

//  // Used like so
//  var arr = [2, 11, 37, 42];
//  shuffle(arr);
//  console.log(arr);
