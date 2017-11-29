import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { scorePoint, resetScore } from '../../actions'
import ScoreButtonsDisplay from '../ScoreButtonsDisplay.jsx'
import ScoreDisplay from '../ScoreDisplay.jsx'
import WinnerDisplay from '../WinnerDisplay.jsx'
import PlayerDisplay from '../PlayerDisplay.jsx'
import ResetButton from '../ResetButton.jsx'

const TennisDisplay = ({currentScore, games, winner, onScoreClick, onResetClick}) => {

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
    </div>
    <div className="buttons-display">
      <ScoreButtonsDisplay
        winner={winner}
        players={getDisplayPlayers(currentScore)}
        onScoreClick={(player) => onScoreClick(player)} />
    </div>
  </div>
}

const getDisplayPoints = (currentScore) => {
  let points = [];
  Object.keys(currentScore).forEach( player => {
    points.push(currentScore[player])
  })
  if(points.includes('adv')){
    let index = points.indexOf('40')
    points[index] = '--'
  }
  return points
}

const getDisplayGames = (games) => {
  let gameScore = [];
  Object.keys(games).forEach( player => {
    gameScore.push(games[player])
  })
  return gameScore
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
