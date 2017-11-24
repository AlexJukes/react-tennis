import { combineReducers } from 'redux'
import {
  SCORE_POINT,
  DECLARE_WINNER
} from './actions'
import {calculateScore} from './scoreCalculator'

function tennisApp(state= initialState, action) {
  switch (action.type) {
    case SCORE_POINT:
      return calculateScore(action.player, state)
    default:
      return state
    }
  }

export default tennisApp
