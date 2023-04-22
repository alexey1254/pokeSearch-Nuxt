async function fetchPokemon(id: string) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) =>
    res.json()
  );
}

export {fetchPokemon}
