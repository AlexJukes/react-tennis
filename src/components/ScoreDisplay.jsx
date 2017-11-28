import React from 'react'

class ScoreDisplay extends React.Component {
  render() {
    return this.props.points.map( point => (
      <div>{point}</div>
    ))
  }
}

export default ScoreDisplay
