import React, { Component } from 'react';
import Card from './Card';
// import './css/Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokedex, entries } = this.props;

    return (
      <div className="Pokedex">
        <div>Pokedex</div>
        {entries.map((entry, index) => (
          <Card pokedex={pokedex} key={index + 1} pokemon={entry} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
