import React from 'react'

class PlayerDisplay extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
  console.log(event.target)
    this.props.onNameChange(event.target.placeholder, event.target.value)
  }

  render() {
      return Object.keys(this.props.players).map(player => (
       <input type="text" value={this.props.players[player]} onChange={this.handleChange} placeholder={player} key={player} className="display-block player"/>
        )
      )
    }
}

export default PlayerDisplay
