export const INCREASE_PLAYER_1_SCORE = 'INCREASE_PLAYER_1_SCORE'
export const INCREASE_PLAYER_2_SCORE = 'INCREASE_PLAYER_2_SCORE'
export const RESET_GAME = 'RESET_GAME'
export const DECLARE_WINNER = 'DECLARE_WINNER'

export function Player1Score(score) {
  return { type: INCREASE_PLAYER_1_SCORE, score }
}

export function Player2Score(score) {
  return { type: INCREASE_PLAYER_2_SCORE, score }
}

export function resetScore() {
  return { type: RESET_GAME }
}

export function declareWinner(player) {
  return { type: DECLARE_WINNER, winner: player }
}
