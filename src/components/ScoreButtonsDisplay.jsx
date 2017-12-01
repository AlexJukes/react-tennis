import React from 'react'
import ScoreButton from './ScoreButton.jsx'

class ScoreButtonsDisplay extends React.Component {
  render() {
      return this.props.players.map( (player, index) => (
        <ScoreButton key={index} player={player} onScoreClick={() => this.props.onScoreClick(player)} />
        ))
  }
}

export default ScoreButtonsDisplay
