import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from './CharacterDetail';

const CharacterDetailList = ({ character }) => (
  <ul aria-label="rick and morty character details">
    {character.map((character) => (
      <li key={character.id}>
        <CharacterDetail
          name={character.name}
          image={character.image}
          status={character.status}
          species={character.species}
        />
      </li>
    ))}
  </ul>
);

CharacterDetailList.propTypes = {
  character: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CharacterDetailList;
