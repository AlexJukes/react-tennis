import { combineReducers } from 'redux'
import {
  UPDATE_PLAYER_1_SCORE,
  UPDATE_PLAYER_2_SCORE,
  DECLARE_WINNER
} from './actions'

function score(state = {}, action) {
  console.log('>>>', state)
  switch (action.type) {
    case UPDATE_PLAYER_1_SCORE:
      state.player1 = action.updatedScore
    case UPDATE_PLAYER_2_SCORE:
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
