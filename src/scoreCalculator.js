import {initialState} from './reducers.js'

export function calculateScore(player = '', state = {}) {

  const currentScore = state.currentScore
  const resetCurrentScore = initialState.currentScore
  const games = state.games
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

  function winGame(player) {
    const newGameState=  Object.assign(
      {},
      state,
      {currentScore: resetCurrentScore}
    )
    newGameState.games[player]++
    return updateState(newGameState)
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
    return winGame(player)
  }

  return updateState({ currentScore: playerScores() })
}
