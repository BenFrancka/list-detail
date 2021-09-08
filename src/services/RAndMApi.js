export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();

  return json.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));
};
