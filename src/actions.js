export const UPDATE_PLAYER_1_SCORE = 'UPDATE_PLAYER_1_SCORE'
export const UPDATE_PLAYER_2_SCORE = 'UPDATE_PLAYER_2_SCORE'
export const RESET_GAME = 'RESET_GAME'
export const DECLARE_WINNER = 'DECLARE_WINNER'

export function updatePlayer1Score(updatedScore) {
  return { type: UPDATE_PLAYER_1_SCORE, updatedScore }
}

export function updatePlayer2Score(updatedScore) {
  return { type: UPDATE_PLAYER_2_SCORE, updatedScore }
}

export function resetScore() {
  return { type: RESET_GAME }
}

export function declareWinner(player) {
  return { type: DECLARE_WINNER, winner: player }
}
