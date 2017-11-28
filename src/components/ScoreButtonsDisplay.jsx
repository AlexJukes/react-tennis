import React from 'react'
import ScoreButton from './ScoreButton.jsx'

class ScoreButtonsDisplay extends React.Component {
  render() {
    return !this.props.winner ? this.props.players.map( player => (
      <ScoreButton key={player} player={player} onScoreClick={() => this.props.onScoreClick(player)} />
    )) : null
  }
}

export default ScoreButtonsDisplay
