import React from 'react'
import PropTypes from 'prop-types'

const ResetButton = ( { onResetClick }) => (
   <button onClick={() => onResetClick()}>
    Reset scores
    </button>
)

export default ResetButton
