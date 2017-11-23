import { combineReducers } from 'redux'
import {
  SCORE_POINT,
  DECLARE_WINNER
} from './actions'
import {scorePoint} from './scoreCalculator'

function score(state = {}, action) {
  console.log('>>>', state)
  switch (action.type) {
    case SCORE_POINT:
      return scorePoint(action.player)
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
