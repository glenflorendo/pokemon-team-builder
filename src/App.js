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
      team: [],
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
          handleRecruitPokemon={this.handleRecruitPokemon}
        />
        <TeamViewer
          team={team}
          handleDischargePokemon={this.handleDischargePokemon}
        />
      </div>
    );
  }

  handleRecruitPokemon = (event, pokemon) => {
    event.stopPropagation();
    const { team } = this.state;
    team.push(pokemon);
    if (team.length > 6) team.splice(0, 1);
    this.setState({
      team,
    });
  };

  handleDischargePokemon = (event, index) => {
    event.stopPropagation();
    const { team } = this.state;
    team.splice(index, 1);
    this.setState({
      team,
    });
  };
}

export default App;
