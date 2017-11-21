import { createStore } from 'redux'
import tennisApp from './reducers'
let store = createStore(tennisApp)

import {
  updatePlayer1Score,
  updatePlayer2Score,
  declareWinner
} from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(updatePlayer1Score(15))
store.dispatch(updatePlayer2Score(30))
store.dispatch(declareWinner('player1'))

// Stop listening to state updates
unsubscribe()
