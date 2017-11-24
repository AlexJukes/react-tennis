import {declareWinner} from './actions'

export function addScore(player = '', score = {}) {

  const opposingPlayer = player === 'player1' ? 'player2' : 'player1'
  const deuce = score[player] === '40' && score[opposingPlayer] === '40'
  const gamePoint = (score[player] === 'adv' || (score[player] === '40' && !deuce ))

  if(score[opposingPlayer] === 'adv') {
    return {player1: '40', player2: '40'}
  }

  if(gamePoint) {
    return declareWinner(player)
  }

  function scoreIncrease(currentScore) {
    const scoreTable = {'0': '15', '15':'30', '30':'40'}
    return deuce ? 'adv' : scoreTable[currentScore]
  }

  function playerScores() {
    return Object.assign(
      {},
      score,
      {[player]: scoreIncrease(score[player])}
    )
  };

  return playerScores()
}
