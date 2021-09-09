import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image, status, species }) => (
  <>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{status}</p>
    <p>{species}</p>
  </>
);

CharacterDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterDetail;
