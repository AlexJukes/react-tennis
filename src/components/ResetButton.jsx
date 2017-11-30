import React from 'react'

const ResetButton = ( { onResetClick }) => (
  <div className="buttons-display">
     <button className="reset-button" onClick={() => onResetClick()}>
       Reset scores
    </button>
  </div>
)

export default ResetButton
