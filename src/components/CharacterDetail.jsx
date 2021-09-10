import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const CharacterDetail = ({ name, image, status, species }) => (
  <article aria-label="detail-view">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{status}</p>
    <p>{species}</p>
  </article>
);

CharacterDetail.propTypes = {
  character: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CharacterDetail;
