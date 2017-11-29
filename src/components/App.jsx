import React from 'react'
import Header from './header'
import Scoreboard from './containers/Scoreboard.jsx'

class App extends React.Component {
  render() {
    return <div className="app-wrapper">
      <Header />
      <Scoreboard />
    </div>
  }
}

export default App
