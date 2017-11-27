import React from 'react'

class ScoreContainer extends React.Component {
  render() {
    return <div>{this.props.player}: {this.props.score} </div>
  }
}


export default ScoreContainer
