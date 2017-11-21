import React from 'react'
import PropTypes from 'prop-types'

const ResetButton = ( { onResetClick }) => (
  <button onClick={() => onResetClick()}>
    Reset scores
    </button>
)

ScoreButton.propTypes = {
  onResetClick: PropTypes.func.isRequired
}

export default ResetButton
