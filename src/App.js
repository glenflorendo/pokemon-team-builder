import React from 'react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
      <Team />
    </div>
  );
}

export default App;
