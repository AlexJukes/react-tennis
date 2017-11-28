import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { scorePoint, resetScore } from '../../actions'
import ScoreButtonsDisplay from '../ScoreButtonsDisplay.jsx'
import ScoreDisplay from '../ScoreDisplay.jsx'
import WinnerDisplay from '../WinnerDisplay.jsx'
import ResetButton from '../ResetButton.jsx'

const Scores = ({score, winner, onScoreClick, onResetClick}) => (
  <div>
    <ScoreDisplay points={getDisplayPoints(score)} />
    <ScoreButtonsDisplay players={getDisplayPlayers(score)} onScoreClick={(player) => onScoreClick(player)} />
    <ResetButton onResetClick={() => onResetClick()} />
    <WinnerDisplay winner={winner} />
  </div>
)

const getDisplayPoints = (score) => {
  const points = [];
  Object.keys(score).forEach( player => {
    points.push(score[player])
  })
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
)(Scores)

export default Scoreboard
