export function calculateScore(player = '', state = {}) {

  const currentScore = state.currentScore
  const winner = state.winner
  const opposingPlayer = player === 'player1' ? 'player2' : 'player1'
  const deuce = currentScore[player] === '40' && currentScore[opposingPlayer] === '40'
  const gamePoint = (currentScore[player] === 'adv' || (currentScore[player] === '40' && !deuce ))

  function updateState(newState) {
    return Object.assign({}, state, newState)
  }

  function scoreIncrease(currentScore) {
    const scoreTable = {'0': '15', '15':'30', '30':'40'}
    return deuce ? 'adv' : scoreTable[currentScore]
  }

  function gameIncrease(player) {

  }


  function playerScores() {
    return Object.assign(
      {},
      currentScore,
      {[player]: scoreIncrease(currentScore[player])}
    )
  };

  if(currentScore[opposingPlayer] === 'adv') {
    return updateState({currentScore: {player1: '40', player2: '40'}})
  }

  if(gamePoint) {
  }

  return updateState({ currentScore: playerScores() })
}
