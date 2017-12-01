export const SCORE_POINT = 'SCORE_POINT'
export const RESET_GAME = 'RESET_GAME'
export const UPDATE_NAME = 'UPDATE_NAME'

export function scorePoint(player) {
  return { type: SCORE_POINT, player }
}

export function resetScore() {
  return { type: RESET_GAME }
}

export function updateName(player, newName) {
  return { type: UPDATE_NAME, player, newName }
}
