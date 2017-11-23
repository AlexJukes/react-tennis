import { combineReducers } from 'redux'
import {
  INCREASE_PLAYER_1_SCORE,
  INCREASE_PLAYER_2_SCORE,
  DECLARE_WINNER
} from './actions'

function score(state = {}, action) {
  console.log('>>>', state)
  switch (action.type) {
    case INCREASE_PLAYER_1_SCORE:
      state.player1 = action.updatedScore
    case INCREASE_PLAYER_2_SCORE:
      state.player2 = action.updatedScore
    default:
      return state
  }
}

function winner(state = null, action) {
  switch (action.type) {
    case DECLARE_WINNER:
      return action.winner
    default:
      return state
  }
}

const tennisApp = combineReducers({
  score,
  winner
})

export default tennisApp
