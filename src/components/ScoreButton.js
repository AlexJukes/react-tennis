import React from 'react'
import PropTypes from 'prop-types'

const ScoreButton = ( { player, onScoreClick }) => (
  <button player={player} onClick={() => onScoreClick(player)}>
    {player} score
    </button>
)

ScoreButton.propTypes = {
  player: PropTypes.string.isRequired,
  onScoreClick: PropTypes.func.isRequired
}

export default ScoreButton
