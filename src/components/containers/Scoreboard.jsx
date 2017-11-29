import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { scorePoint, resetScore } from '../../actions'
import ScoreButtonsDisplay from '../ScoreButtonsDisplay.jsx'
import ScoreDisplay from '../ScoreDisplay.jsx'
import WinnerDisplay from '../WinnerDisplay.jsx'
import PlayerDisplay from '../PlayerDisplay.jsx'
import ResetButton from '../ResetButton.jsx'

const TennisDisplay = ({score, winner, onScoreClick, onResetClick}) => {

  return winner ?
  <div className = "winner-display">
    <WinnerDisplay winner={winner} />
    <ResetButton onResetClick={() => onResetClick()} />
  </div> :
  <div className="score-interface">
    <div className="score-display">
      <div className="players-display">
        <PlayerDisplay players={getDisplayPlayers(score)} />
      </div>
      <div className="points-display">
        <ScoreDisplay points={getDisplayPoints(score)}/>
      </div>
    </div>
    <div className="buttons-display">
      <ScoreButtonsDisplay
        winner={winner}
        players={getDisplayPlayers(score)}
        onScoreClick={(player) => onScoreClick(player)} />
    </div>
  </div>
}

const getDisplayPoints = (score) => {
  let points = [];
  Object.keys(score).forEach( player => {
    points.push(score[player])
  })
  if(points.includes('adv')){
    let index = points.indexOf('40')
    points[index] = '--'
  }
  return points
}

const getDisplayPlayers = (score) => {
  const players = [];
  Object.keys(score).forEach( player => {
    players.push(player)
  })
  return players
}

const mapStateToProps = state => ({
  score: state.score,
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
