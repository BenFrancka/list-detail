export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();

  return json.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));
};

export const fetchCharacterById = async () => {
  const id = params.id;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  return json.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    species: character.species
  }));
};
