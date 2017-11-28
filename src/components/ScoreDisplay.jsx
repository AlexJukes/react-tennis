import React from 'react'

class ScoreDisplay extends React.Component {

  render() {
    if(this.props.playerWithAdvantage) {
      return <div>Advantage: {this.props.playerWithAdvantage} </div>
    }
    if(this.props.isDeuce) {
      return <div> Deuce </div>
    }
    return this.props.points.map( point => (
      <div>{point}</div>
    ))
  }
}

export default ScoreDisplay
