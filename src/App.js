import React, { Component } from 'react';
import * as PokeAPI from 'pokeapi-js-wrapper';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Team from './components/Team';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.Pokedex = new PokeAPI.Pokedex({
      protocol: 'https',
      versionPath: '/api/v2/',
      cache: true,
      timeout: 5 * 1000, // 5s
    });

    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    this.Pokedex.getPokemonsList({ limit: 964 }).then(({ count, results }) => {
      this.setState({
        entries: results,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex pokedex={this.Pokedex} entries={this.state.entries} />
        <Team />
      </div>
    );
  }
}

export default App;
