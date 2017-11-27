import {combineReducers} from 'redux'
import {SCORE_POINT, DECLARE_WINNER} from './actions'
import {calculateScore} from './scoreCalculator'

const initialState = {
  score: {
    player1: '0',
    player2: '0'
  },
  winner: null
}

function tennisApp(state = initialState, action) {
  switch (action.type) {
    case SCORE_POINT:
      return calculateScore(action.player, state)
    default:
      return state
  }
}

export default tennisApp
