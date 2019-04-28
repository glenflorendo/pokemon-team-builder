import React, { Component } from 'react';
import FastAverageColor from 'fast-average-color/dist/index.es6';
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
      styles: {},
    };
  }

  componentDidMount() {
    const { pokedex, name } = this.props;
    pokedex.getPokemonByName(name).then(pkmn => {
      this.setState({
        ...pkmn,
        types: pkmn.types.reduceRight(
          (acc, { type }) =>
            acc.concat({
              name: type.name,
              styles: { backgroundColor: `var(--${type.name}-type)` },
            }),
          [],
        ),
        picture: `${PKMN_IMG_URL}${this.props.id}.png`,
      });
    });
  }

  render() {
    const { name, handleRecruitPokemon } = this.props;
    const { id, picture, types, styles } = this.state;

    return (
      <div className="Card" style={styles}>
        <div className="header">
          <span className="id">{`#${`00${id}`.slice(-3)}`}</span>
          <span className="name">{name}</span>
        </div>
        <div className="picture">
          <img
            src={picture}
            alt={name}
            onLoad={this.handleOnLoad.bind(this)}
            crossOrigin=""
            ref="picture"
          />
        </div>
        <div className="types">
          {types.map(({ name, styles }, index) => (
            <span key={index} style={styles}>
              {name}
            </span>
          ))}
        </div>
        <div className="footer">
          <div
            className="recruit"
            onClick={e => handleRecruitPokemon(e, this.state)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/recruit-indicator.png`}
              alt="recruit indicator"
            />
          </div>
        </div>
      </div>
    );
  }

  handleOnLoad = () => {
    const fac = new FastAverageColor();
    const colorInfo = fac.getColor(this.refs.picture);
    this.setState({
      styles: {
        backgroundColor: colorInfo.rgb,
      },
    });
  };
}

export default Card;
