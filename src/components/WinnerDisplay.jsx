import React from 'react'

class WinnerDisplay extends React.Component {
  render() {
    return this.props.winner ? <div className="winner"> <span className="winning-player">{this.props.winner}</span> wins the game! </div> : null
  }
}

export default WinnerDisplay
