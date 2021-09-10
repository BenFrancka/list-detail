export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();

  return json.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();


  const character = {
    id: json.id,
    name: json.name,
    image: json.image,
    status: json.status,
    species: json.species,
  };
console.log(character);
  return character;
  
  // return json.then((character) => ({
  //   id: character.id,
  //   name: character.name,
  //   image: character.image,
  //   statues: character.status,
  //   species: character.species,
  // }));
};
