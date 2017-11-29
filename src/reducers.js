import {combineReducers} from 'redux'
import {SCORE_POINT, RESET_GAME} from './actions'
import {calculateScore} from './scoreCalculator'

const initialState = {
  currentScore: {
    player1: '0',
    player2: '0'
  },
  games: {
    player1: 0,
    player2: 0
  },
  sets: {
    player1: 0,
    player2: 0
  },
  winner: null
}

function tennisApp(state = initialState, action) {
  switch (action.type) {
    case SCORE_POINT:
      return calculateScore(action.player, state)
    case RESET_GAME:
      return initialState
    default:
      return state
  }
}

export default tennisApp
