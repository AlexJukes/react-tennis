import {initialState} from './reducers.js'

export function calculateScore(player = '', state = {}) {

  const currentScore = state.currentScore
  const games = state.games
  const sets = state.sets
  const winner = state.winner
  const opposingPlayer = player === 'player1' ? 'player2' : 'player1'
  const deuce = currentScore[player] === '40' && currentScore[opposingPlayer] === '40'
  const isGamePoint = (currentScore[player] === 'adv' || (currentScore[player] === '40' && !deuce ))
  const isSetGame = games[player] >= 5 && (games[player] - 1) >= games[opposingPlayer]
  const isMatchPoint = sets[player] === 1
  const resetCurrentScore = { player1: "0", player2: "0"}
  const resetGames = { player1: 0, player2: 0}

  function updateState(newState) {
    return Object.assign({}, state, newState)
  }

  function pointIncrease(currentScore) {
    const scoreTable = {'0': '15', '15':'30', '30':'40'}
    return deuce ? 'adv' : scoreTable[currentScore]
  }

  function playerScores() {
    return Object.assign(
      {},
      currentScore,
      {[player]: pointIncrease(currentScore[player])}
    )
  };

  if(currentScore[opposingPlayer] === 'adv') {
    return updateState({currentScore: {player1: '40', player2: '40'}})
  }

  if(isGamePoint) {
    return winGame(player, state)
  }

  function winGame(player, currentState) {
    if(isSetGame){
      return winSet(player, currentState)
    }
    return Object.assign({}, currentState,
      {
        currentScore: resetCurrentScore,
        games: Object.assign({},
          currentState.games,
          {[player]: currentState.games[player] + 1}
        )
      }
    )
  }

  function winSet(player, currentState) {
    if(isMatchPoint){
      return updateState({winner: player})
    }
    return Object.assign({}, currentState,
      {
        currentScore: resetCurrentScore,
        games: resetGames,
        sets: Object.assign({},
          currentState.sets,
          {[player]: currentState.sets[player] + 1}
        )
      }
    )
  }

  return updateState({ currentScore: playerScores() })
}
