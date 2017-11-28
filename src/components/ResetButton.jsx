import React from 'react'
import PropTypes from 'prop-types'

const ResetButton = ( { onResetClick }) => (
  <div className="buttons-display">
     <button onClick={() => onResetClick()}>
       Reset scores
    </button>
  </div>
)

export default ResetButton
