import { combineReducers } from 'redux'
import {
  SCORE_POINT,
  DECLARE_WINNER
} from './actions'
import {addScore} from './scoreCalculator'

console.log(addScore)

function score(state = {}, action) {
  switch (action.type) {
    case SCORE_POINT:
      return addScore(action.player, state)
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
