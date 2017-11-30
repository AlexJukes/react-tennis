import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { scorePoint, resetScore } from '../../actions'
import ScoreButtonsDisplay from '../ScoreButtonsDisplay.jsx'
import ScoreDisplay from '../ScoreDisplay.jsx'
import WinnerDisplay from '../WinnerDisplay.jsx'
import PlayerDisplay from '../PlayerDisplay.jsx'
import ResetButton from '../ResetButton.jsx'

const TennisDisplay = ({
    currentScore,
    games,
    sets,
    winner,
    onScoreClick,
    onResetClick
  }) => {

  return winner ?
  <div className = "winner-display">
    <WinnerDisplay winner={winner} />
    <ResetButton onResetClick={() => onResetClick()} />
  </div> :
  <div className="score-interface">
    <div className="score-display">
      <div className="players-display">
        <PlayerDisplay players={getDisplayPlayers(currentScore)} />
      </div>
      <div className="points-display">
        <ScoreDisplay points={getDisplayPoints(currentScore)}/>
      </div>
      <div className="games-display">
        <ScoreDisplay points={getDisplayPoints(games)}/>
      </div>
      <div className="sets-display">
        <ScoreDisplay points={getDisplayPoints(sets)}/>
      </div>
    </div>
    <div className="buttons-display">
      <ScoreButtonsDisplay
        winner={winner}
        players={getDisplayPlayers(currentScore)}
        onScoreClick={(player) => onScoreClick(player)} />
    </div>
  </div>
}

const getDisplayPoints = (points) => {
  let displayPoints = [];
  Object.keys(points).forEach( player => {
    displayPoints.push(points[player])
  })
  if(displayPoints.includes('adv')){
    let index = displayPoints.indexOf('40')
    displayPoints[index] = '--'
  }
  return displayPoints
}

const getDisplayPlayers = (score) => {
  const players = [];
  Object.keys(score).forEach( player => {
    players.push(player)
  })
  return players
}

const mapStateToProps = state => ({
  currentScore: state.currentScore,
  games: state.games,
  sets: state.sets,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
    onScoreClick: player => dispatch(scorePoint(player)),
    onResetClick: () => dispatch(resetScore())
  });

const Scoreboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisDisplay)

export default Scoreboard
