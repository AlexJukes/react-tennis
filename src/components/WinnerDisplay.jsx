import React from 'react'

class WinnerDisplay extends React.Component {
  render() {
    return this.props.winner ? <div> {this.props.winner} wins the game! </div> : null
  }
}

export default WinnerDisplay
