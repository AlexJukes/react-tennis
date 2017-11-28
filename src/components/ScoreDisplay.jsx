import React from 'react'

class ScoreDisplay extends React.Component {

  render() {

    const player1Advantage = () => (
      <div>
        <div className="point player1">adv</div>
        <div className="point player2">--</div>
      </div>
    )

    const player2Advantage = () => (
      <div>
        <div className="point player1">--</div>
        <div className="point player2">adv</div>
      </div>
    )

    const displayScore = () => {
      if(this.props.playerWithAdvantage === 'player1'){
        return player1Advantage()
      }
      if(this.props.playerWithAdvantage === 'player2'){
        return player2Advantage()
      }
      return this.props.points.map( point => (
        <div className="point">{point}</div>
      ))
    }

    return <div className="scores">
      {displayScore()}
    </div>

  }
}

export default ScoreDisplay
