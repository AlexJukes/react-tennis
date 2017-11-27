import React from 'react'
import { connect } from 'react-redux'
import { scorePoint } from '../actions'
import PropTypes from 'prop-types'


class ScoreButton extends React.Component {
  render() {
    return  <button onClick={() => this.props.onScoreClick(this.props.player)}>
        {this.props.player} score
        </button>
  }
}

export default ScoreButton
