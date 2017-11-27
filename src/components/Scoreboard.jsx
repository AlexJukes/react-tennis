import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ScoreContainer from './containers/ScoreContainer.jsx'
import ScoreButton from './ScoreButton.jsx'

const player1 = 'player1'
const player2 = 'player2'

const Scores = ({score}) => (
  <div>
    <div>
      <ScoreContainer player={player1} score={score[player1]} />
        <div>
          <ScoreButton player={player1} onScoreClick={onScoreClick} />
        </div>
    </div>
    <div>
      <ScoreContainer player={player2} score={score[player2]} />
    </div>
  </div>
)

export function onScoreClick(dispatch, player) {
  return dispatch(scorePoint(player))
}

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onScoreClick: onScoreClick(dispatch, player)
    }
  }
}

const Scoreboard = connect(
  mapStateToProps
)(Scores)

export default Scoreboard
