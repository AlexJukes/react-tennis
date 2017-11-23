import React from 'react'
import PropTypes from 'prop-types'

const Score = ( { player, currentScore }) => (
  <div player={player} score={currentScore}>
    {player} score: {currentScore}
    </div>
)

Score.propTypes = {
  player: PropTypes.string.isRequired,
  currentScore: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {


  }
}

export default Score
