import React, { Component } from 'react';
// import './css/Card.css';

class Card extends Component {
  render() {
    const { pokemon } = this.props;

    return <div className="Card">{pokemon.name}</div>;
  }
}

export default Card;
