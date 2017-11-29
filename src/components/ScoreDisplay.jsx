import React from 'react'

class ScoreDisplay extends React.Component {

  render() {

    return this.props.points.map(
        (point, index) => (
          <div key={index} className="display-block point"> {point} </div>
        )
      )
    }
}

export default ScoreDisplay
