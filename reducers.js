import { combineReducers } from 'redux'


export const INITIAL_SCORE = 0;

const initialState = {
  score: {
    player1: INITIAL_SCORE,
    player2: INITIAL_SCORE
  }
  winner: null
}

function score(state = {}, action) {
  switch (action.type) {
    case UPDATE_PLAYER_1_SCORE:
      return player1: action.score
    case UPDATE_PLAYER_2_SCORE:
      return player2: action.score
  }
})
}
}

function winner(state = null, action) {

  switch (action.type) {
    case DECLARE_WINNER:
      return action.winner
    default:
      return state
  })
}

const tennisApp = combineReducers({
  score,
  winner
})

export default tennisApp
