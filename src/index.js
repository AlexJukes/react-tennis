import { createStore } from 'redux'
import tennisApp from './reducers'


export const INITIAL_SCORE = '0';

export const initialState = {
  score: {
    player1: INITIAL_SCORE,
    player2: INITIAL_SCORE
  },
  winner: null
}

let store = createStore(tennisApp, initialState)

import {
  scorePoint,
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
store.dispatch(scorePoint('player1', initialState))
store.dispatch(scorePoint('player2', store.getState()))
store.dispatch(scorePoint('player2', store.getState()))
store.dispatch(scorePoint('player2', store.getState()))
store.dispatch(declareWinner('player2', store.getState()))

// Stop listening to state updates
unsubscribe()
