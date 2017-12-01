import {combineReducers} from 'redux'
import {SCORE_POINT, RESET_GAME, UPDATE_NAME} from './actions'
import {calculateScore} from './scoreCalculator'
import {updateName} from './updateName'


export const initialState = {
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
  winner: null,
  displayNames: {
    player1: 'Player 1',
    player2: 'Player 2'
  }
}

function tennisApp(state = initialState, action) {
  switch (action.type) {
    case SCORE_POINT:
      return calculateScore(action.player, state)
    case RESET_GAME:
      return initialState
    case UPDATE_NAME:
      return updateName(action.player, action.newName, state)
    default:
      return state
  }
}

export default tennisApp
