import React from 'react'
import ScoreButton from './ScoreButton.jsx'

class ScoreButtonsDisplay extends React.Component {
  render() {
    return Object.keys(this.props.players).map((player, index) => (
        <ScoreButton key={index} player={player} displayName={this.props.players[player]} onScoreClick={() => this.props.onScoreClick(player)} />
        ))
  }
}

export default ScoreButtonsDisplay
