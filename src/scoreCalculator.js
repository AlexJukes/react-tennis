export function scorePoint(player = '', score = {}) {

  const deuce = score.player1 === '40' && score.player2 === '40'
  const opposingPlayer = player === 'player1' ? 'player2' : 'player1'

  // if the opposing player has advantage, return their score to 40

  if(score[opposingPlayer] === 'adv') {
    return {player1: '40', player2: '40'}
  }

  function scoreIncrease(currentScore) {
    const scoreTable = {'0': '15', '15':'30', '30':'40'}
    return deuce ? 'adv' : scoreTable[currentScore]
  }

  function player1Scores() {
    return Object.assign(
      {},
      score,
      {player1: scoreIncrease(score.player1)}
    )
  };

  function player2Scores() {
    return Object.assign(
      {},
      score,
      {player2: scoreIncrease(score.player2)}
    )
  };

  return player === 'player1' ? player1Scores() : player2Scores()
}
