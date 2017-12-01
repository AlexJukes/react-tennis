import React from 'react'


class ScoreButton extends React.Component {
  render() {
  
    return  <button className={"player score-button"} onClick={() => this.props.onScoreClick(this.props.player)}>
        {this.props.player} score
      </button>
  }
}

export default ScoreButton
