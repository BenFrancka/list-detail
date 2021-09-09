import React, { Component } from 'react';
import { fetchCharacters } from '../services/RAndMApi';
import CharacterList from '../components/CharacterList';

export default class RAndMContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { characters, loading } = this.state;
    if(loading) {
      return (
        <img
          src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
          alt="loading spinner"
        />
      );
    }
    return <CharacterList characters={characters} />;
  }
}
