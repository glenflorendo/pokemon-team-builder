import React, { Component } from 'react';
import * as PokeAPI from 'pokeapi-js-wrapper';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import TeamViewer from './components/TeamViewer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.Pokedex = new PokeAPI.Pokedex({
      protocol: 'https',
      versionPath: '/api/v2/',
      cache: true,
    });

    this.state = {
      entries: [],
      team: new Array(6),
    };
  }

  componentDidMount() {
    this.Pokedex.getPokemonsList({ limit: 20 }).then(({ count, results }) => {
      this.setState({
        entries: results,
      });
    });
  }

  render() {
    const { entries, team } = this.state;

    return (
      <div className="App">
        <Header />
        <Pokedex
          pokedex={this.Pokedex}
          entries={entries}
          handleAddPokemon={this.handleAddPokemon}
        />
        <TeamViewer team={team} />
      </div>
    );
  }

  handleAddPokemon = (event, pokemon) => {
    event.stopPropagation();
    let team = this.state.team.concat(pokemon);
    team.splice(0, 1);

    this.setState(prevState => ({
      team,
    }));
  };
}

export default App;
