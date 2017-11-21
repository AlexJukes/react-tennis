export const UPDATE_PLAYER_1_SCORE = 'UPDATE_PLAYER_1_SCORE'
export const UPDATE_PLAYER_2_SCORE = 'UPDATE_PLAYER_2_SCORE'
export const RESET_GAME = 'RESET_GAME'
export const DECLARE_WINNER = 'DECLARE_WINNER'

export function updatePlayer1Score(currentScore) {
  return { type: UPDATE_PLAYER_1_SCORE, currentScore }
}

export function updatePlayer2Score(currentScore) {
  return { type: UPDATE_PLAYER_2_SCORE, currentScore }
}

export function resetScore() {
  return { type: RESET_GAME }
}

export function declareWinner(player) {
  return { type: DECLARE_WINNER, winner: player }
}
