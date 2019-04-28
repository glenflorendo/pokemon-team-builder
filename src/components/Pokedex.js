import React, { Component } from 'react';
import Card from './Card';
import '../css/Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokedex, entries } = this.props;

    return (
      <div className="Pokedex">
        {entries.map(({ name, url }, index) => (
          <Card
            pokedex={pokedex}
            key={index + 1}
            id={url.split('/')[6]}
            name={name}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
