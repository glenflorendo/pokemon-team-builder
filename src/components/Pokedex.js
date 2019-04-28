import React, { Component } from 'react';
import Card from './Card';
import '../css/Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokedex, entries, handleAddPokemon } = this.props;

    return (
      <div className="Pokedex">
        {entries.map(({ name, url }, index) => (
          <Card
            pokedex={pokedex}
            handleAddPokemon={handleAddPokemon}
            key={index + 1}
            id={url.split('/')[6]}
            name={name}
            ref={`card${index + 1}`}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
