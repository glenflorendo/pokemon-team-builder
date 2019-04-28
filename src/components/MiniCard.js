import React, { Component } from 'react';
import '../css/MiniCard.css';

class MiniCard extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, picture, styles } = pokemon;
    console.log(pokemon);
    return (
      <span className="MiniCard" style={styles}>
        <span className="picture">
          <img src={picture} alt="name" />
        </span>
        <span className="name">{name}</span>
        <span className="discharge">
          <i class="fas fa-times" />
        </span>
      </span>
    );
  }
}

export default MiniCard;
