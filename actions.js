export const INCREASE_PLAYER_1_SCORE = 'INCREASE_PLAYER_1_SCORE'
export const INCREASE_PLAYER_2_SCORE = 'INCREASE_PLAYER_2_SCORE'
export const RESET_SCORE = 'RESET_SCORE'
export const DECLARE_WINNER = 'DECLARE_WINNER'

export function updateScore(currentScore) {
  return { type: INCREASE_SCORE, currentScore }
}

export function resetScore() {
  return { type: RESET_SCORE }
}

export function declareWinner(player) {
  return { type: DECLARE_WINNER, winner: player }
}
