import React, { Component } from 'react';
import '../css/MiniCard.css';

class MiniCard extends Component {
  render() {
    const { index, pokemon, handleDischargePokemon } = this.props;
    const { name, picture, styles } = pokemon;

    return (
      <span className="MiniCard" style={styles}>
        <span className="picture">
          <img src={picture} alt="name" />
        </span>
        <span className="name">{name}</span>
        <span
          className="discharge"
          onClick={e => handleDischargePokemon(e, index)}
        >
          <i className="fas fa-times" />
        </span>
      </span>
    );
  }
}

export default MiniCard;
