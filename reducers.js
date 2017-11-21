
export const INITIAL_SCORE = 0;

const initialState = {
  score: { player1: INITIAL_SCORE, player2: INITIAL_SCORE }
  winner: null
}

function tennisApp(state = initialState, action ) {

  switch (action.type) {
    case INCREASE_PLAYER_1_SCORE:
      return Object.assign({}, state, {
        score: {
          ...state.score,
          {
            player1: action.score
          }
        }
      })
    case INCREASE_PLAYER_2_SCORE:
      return Object.assign({}, state, {
          score: {
            ...state.score,
            {
              player2: action.score
            }
          }
        })
    case DECLARE_WINNER:
      return Object.assign({}, state, {
        score:
        { ...state.score }
        winner: action.winner
      })
    case RESET_SCORE:
      return Object.assign({}, state, {
        initialState
      })
    default:
        return state
    }
}
