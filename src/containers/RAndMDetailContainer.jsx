import React, { Component } from 'react';
import { fetchCharacterById } from '../services/RAndMApi';
import CharacterDetail from '../components/CharacterDetail';

export default class RAndMDetailContainer extends Component {
  state = {
    loading: true,
    character: {},
  };

  async componentDidMount() {
    const character = await fetchCharacterById(this.props.match.params.id);
    this.setState({ character, loading: false });
  }

  render() {
    const { character, loading } = this.state;
    if (loading) {
      return (
        <img
          src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
          alt="loading spinner"
        />
      );
    }
    return (
      <CharacterDetail
        character={
          (character.id,
          character.name,
          character.image,
          character.species,
          character.status)
        }
      />
    );
  }
}
