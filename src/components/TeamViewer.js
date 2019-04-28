import React, { Component } from 'react';
import MiniCard from './MiniCard';
import '../css/TeamViewer.css';

class TeamViewer extends Component {
  render() {
    const { team } = this.props;

    return (
      <div className="TeamViewer">
        {team.map((member, index) => (
          <MiniCard key={index} pokemon={member} />
        ))}
      </div>
    );
  }
}

export default TeamViewer;
