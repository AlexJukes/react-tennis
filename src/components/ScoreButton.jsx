import React from 'react'
import { Button } from '../../node_modules/bootstrap/js/button.js'


class ScoreButton extends React.Component {
  render() {
    return  <button className={this.props.player + " score-button"} onClick={() => this.props.onScoreClick(this.props.player)}>
        {this.props.player} score
      </button>
  }
}

export default ScoreButton
