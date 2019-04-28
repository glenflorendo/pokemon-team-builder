import React, { Component } from 'react';
import '../css/Card.css';

const PKMN_IMG_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      // name
      // base_experience
      // height
      // is_default
      // order
      // weight
      // abilities
      // forms
      // game_indices
      // held_items
      // location_area_encounters
      // moves
      // species
      // sprites
      // stats
      types: [],
      picture: '',
    };
  }

  componentDidMount() {
    const { pokedex, name } = this.props;
    pokedex.getPokemonByName(name).then(pkmn => {
      this.setState({
        ...pkmn,
        types: pkmn.types.reduceRight(
          (acc, { type }) => acc.concat(type.name),
          [],
        ),
        picture: `${PKMN_IMG_URL}${this.props.id}.png`,
      });
    });
  }

  render() {
    const { name } = this.props;
    const { id, picture, types } = this.state;

    console.log(types);

    return (
      <div className="Card">
        <div className="header">
          <span className="id">{`#${`00${id}`.slice(-3)}`}</span>
          <span className="name">{name}</span>
        </div>
        <div className="picture">
          <img src={picture} alt={name} />
        </div>
        <div className="types">
          {types.map((type, index) => (
            <span key={index}>{type}</span>
          ))}
        </div>
        <div className="footer">
          <input
            className="recruit"
            type="image"
            alt="recruit indicator"
            src={`${process.env.PUBLIC_URL}/img/recruit-indicator.png`}
          />
        </div>
      </div>
    );
  }
}

export default Card;
