import React, { Component } from 'react';
import MiniCard from './MiniCard';
import '../css/TeamViewer.css';

class TeamViewer extends Component {
  render() {
    const { team, handleDischargePokemon } = this.props;

    return (
      <div className="TeamViewer">
        {team.map((member, index) => (
          <MiniCard
            key={index}
            index={index}
            pokemon={member}
            handleDischargePokemon={handleDischargePokemon}
          />
        ))}
      </div>
    );
  }
}

export default TeamViewer;
