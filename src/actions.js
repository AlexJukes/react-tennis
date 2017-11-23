export const SCORE_POINT = 'SCORE_POINT'
export const RESET_GAME = 'RESET_GAME'
export const DECLARE_WINNER = 'DECLARE_WINNER'

export function scorePoint(player) {
  return { type: SCORE_POINT, player }
}

export function resetScore() {
  return { type: RESET_GAME }
}

export function declareWinner(player) {
  return { type: DECLARE_WINNER, winner: player }
}
