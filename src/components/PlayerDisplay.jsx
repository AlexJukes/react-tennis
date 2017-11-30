import React from 'react'

class PlayerDisplay extends React.Component {

  render() {
      return this.props.players.map(
        player => (
          <div contentEditable="true" key={player} className="display-block player"> {player} </div>
        )
      )
    }
}

export default PlayerDisplay
