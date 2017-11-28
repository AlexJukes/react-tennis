import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { scorePoint, resetScore } from '../../actions'
import ScoreButtonsDisplay from '../ScoreButtonsDisplay.jsx'
import ScoreDisplay from '../ScoreDisplay.jsx'
import WinnerDisplay from '../WinnerDisplay.jsx'
import ResetButton from '../ResetButton.jsx'

const Scores = ({score, winner, onScoreClick, onResetClick}) => {

  return winner ?
  <div>
    <WinnerDisplay winner={winner} />
    <ResetButton onResetClick={() => onResetClick()} />
  </div> :
  <div>
    <ScoreDisplay
      points={getDisplayPoints(score)}
      playerWithAdvantage={playerWithAdvantage(score)} />
    <ScoreButtonsDisplay
      winner={winner}
      players={getDisplayPlayers(score)}
      onScoreClick={(player) => onScoreClick(player)} />
  </div>
}

const isDeuce = (score) => (
  score.player1 === '40' && score.player2 === '40'
)

const playerWithAdvantage = (score) => {
  let playerWithAdvantage = ''
  Object.keys(score).forEach( player => {
    return score[player] === 'adv' ? playerWithAdvantage = player : null
  })
  return playerWithAdvantage
}

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
