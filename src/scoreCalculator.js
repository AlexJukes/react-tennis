import {declareWinner} from './actions'

export function calculateScore(player = '', state = {}) {

  const score = state.score
  let winner = null
  const opposingPlayer = player === 'player1' ? 'player2' : 'player1'
  const deuce = score[player] === '40' && score[opposingPlayer] === '40'
  const gamePoint = (score[player] === 'adv' || (score[player] === '40' && !deuce ))

  function scoreIncrease(currentScore) {
    const scoreTable = {'0': '15', '15':'30', '30':'40'}
    return deuce ? 'adv' : scoreTable[currentScore]
  }

  function updateState(newState) {
    return Object.assign({}, state, newState)
  }

  if(score[opposingPlayer] === 'adv') {
    return updateState({score: {player1: '40', player2: '40'}})
  }

  if(gamePoint) {
    return updateState({winner: player})
  }

  function playerScores() {
    return Object.assign(
      {},
      score,
      {[player]: scoreIncrease(score[player])}
    )
  };

  return updateState({ score: playerScores() })
}
