import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ScoreContainer from './containers/ScoreContainer.jsx'
import ScoreButton from './ScoreButton.jsx'
import { scorePoint } from '../actions'


const player1 = 'player1'
const player2 = 'player2'

const Scores = ({score, onScoreClick}) => (
  <div>
    <div>
      <ScoreContainer player={player1} score={score[player1]} />
        <div>
          <ScoreButton player={player1} onScoreClick={() => onScoreClick(player1)} />
        </div>
    </div>
    <div>
      <ScoreContainer player={player2} score={score[player2]} />
      <div>
        <ScoreButton player={player2} onScoreClick={() => onScoreClick(player2)} />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onScoreClick: player => {
      dispatch(scorePoint(player))
    }
    }
  }

const Scoreboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores)

export default Scoreboard
