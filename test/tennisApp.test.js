import { initialState } from '../src/reducers.js'
import { createStore } from 'redux'
import { scorePoint, resetScore, updateName } from '../src/actions'
import tennisApp from '../src/reducers'

let store
let getState
let getPlayer1Score
let getPlayer2Score
let getPlayer1Game
let getPlayer2Game
let getPlayer1Set
let getPlayer2Set
let getWinner

beforeEach(() => {
  store = createStore(tennisApp, initialState)
  getState = () => store.getState()
  getPlayer1Score = () => getState().currentScore.player1
  getPlayer2Score = () => getState().currentScore.player2
  getPlayer1Game = () => getState().games.player1
  getPlayer2Game = () => getState().games.player2
  getPlayer1Set = () => getState().sets.player1
  getPlayer2Set = () => getState().sets.player2
  getWinner = () => getState().winner
})

describe('calculateScore', () => {

  describe('pointIncrease', () => {

    it('increases the score for the specified player correctly', () => {
      //act
      store.dispatch(scorePoint('player1'))
      store.dispatch(scorePoint('player2'))

      //assert
      expect(getPlayer1Score()).toEqual('15')
      expect(getPlayer2Score()).toEqual('15')
    });

    it('calculates basic scoring correctly', () => {
      //act
      store.dispatch(scorePoint('player1'))
      store.dispatch(scorePoint('player1'))
      store.dispatch(scorePoint('player1'))

      //assert
      expect(getPlayer1Score()).toEqual('40')
      expect(getPlayer2Score()).toEqual('0')
    });

    it('gives advantage to the player who scored if players are tied on deuce', () => {
      //arange
      const deuce = Object.assign(
        {},
        initialState,
        {
          currentScore: {
            player1: '40',
            player2: '40'}
        }
      )
      store = createStore(tennisApp, deuce)

      //act
      store.dispatch(scorePoint('player1'))

      //assert
      expect(getPlayer1Score()).toEqual('adv')
      expect(getPlayer2Score()).toEqual('40')
    })

    it('returns the score to deuce if the player without an advantage scores', () => {
      //arrange
      const advantagePlayer1 = Object.assign(
        {},
        initialState,
        {
          currentScore: {
            player1: 'adv',
            player2: '40'
          }
        }
      )
      store = createStore(tennisApp, advantagePlayer1)

      //act
      store.dispatch(scorePoint('player2'))

      //assert
      expect(getPlayer1Score()).toEqual('40')
      expect(getPlayer2Score()).toEqual('40')
    })
  });

  describe('winGame', () => {

    it('increases the number of games won for the winning player and resets the points', () => {
      //arrange
      const advantagePlayer1 = Object.assign(
        {},
        initialState,
        {
          currentScore: {
            player1: 'adv',
            player2: '40'
          }
        }
      )
      store = createStore(tennisApp, advantagePlayer1)

      //act
      store.dispatch(scorePoint('player1'))

      //assert
      expect(getPlayer1Game()).toEqual(1)
      expect(getPlayer2Game()).toEqual(0)
      expect(getPlayer1Score()).toEqual('0')
      expect(getPlayer2Score()).toEqual('0')
    });
  })

  describe('winSet', () => {
    it('scores the player a set if they win 6 games and reset game and current score points', () => {
      //arrange
      const setPointPlayer1 = Object.assign(
        {},
        initialState,
        {
          currentScore: {
            player1: 'adv',
            player2: '40'
          },
          games: {
            player1: 5,
            player2: 0
          }
        }
      )
      store = createStore(tennisApp, setPointPlayer1)

      //act
      store.dispatch(scorePoint('player1'))

      //assert
      expect(getPlayer1Set()).toEqual(1)
      expect(getPlayer2Set()).toEqual(0)
      expect(getPlayer1Game()).toEqual(0)
      expect(getPlayer2Game()).toEqual(0)
      expect(getPlayer1Score()).toEqual('0')
      expect(getPlayer2Score()).toEqual('0')
    })

      it('scores the player a set if they win 6 games and resets the game and current score points', () => {
        //arrange
        const setPointPlayer1 = Object.assign(
          {},
          initialState,
          {
            currentScore: {
              player1: 'adv',
              player2: '40'
            },
            games: {
              player1: 5,
              player2: 0
            }
          }
        )
        store = createStore(tennisApp, setPointPlayer1)

        //act
        store.dispatch(scorePoint('player1'))

        //assert
        expect(getPlayer1Set()).toEqual(1)
        expect(getPlayer2Set()).toEqual(0)
        expect(getPlayer1Game()).toEqual(0)
        expect(getPlayer2Game()).toEqual(0)
        expect(getPlayer1Score()).toEqual('0')
        expect(getPlayer2Score()).toEqual('0')
      })

      it('will take the players to an additional game if the player is not winning by 2 clear games', () => {
        //arrange
        const setTiePlayer1 = Object.assign(
          {},
          initialState,
          {
            currentScore: {
              player1: 'adv',
              player2: '40'
            },
            games: {
              player1: 5,
              player2: 5
            }
          }
        )
        store = createStore(tennisApp, setTiePlayer1)

        //act
        store.dispatch(scorePoint('player1'))

        //assert
        expect(getPlayer1Game()).toEqual(6)
        expect(getPlayer2Game()).toEqual(5)
        expect(getPlayer1Set()).toEqual(0)
        expect(getPlayer2Set()).toEqual(0)
        expect(getPlayer1Score()).toEqual('0')
        expect(getPlayer2Score()).toEqual('0')
      })

      it('win a set when score becomes 7 games to 5', () => {
        //arrange
        const setAdvantagePlayer1 = Object.assign(
          {},
          initialState,
          {
            currentScore: {
              player1: 'adv',
              player2: '40'
            },
            games: {
              player1: 6,
              player2: 5
            }
          }
        )
        store = createStore(tennisApp, setAdvantagePlayer1)

        //act
        store.dispatch(scorePoint('player1'))

        //assert
        expect(getPlayer1Set()).toEqual(1)
        expect(getPlayer2Set()).toEqual(0)
        expect(getPlayer1Game()).toEqual(0)
        expect(getPlayer2Game()).toEqual(0)
        expect(getPlayer1Score()).toEqual('0')
        expect(getPlayer2Score()).toEqual('0')
      })
  })
})

describe('winning the match', () => {
  it('should declare the winner of the match', () => {
    //arrange
    const matchPoint = Object.assign(
      {},
      initialState,
      {
        currentScore: {
          player1: 'adv',
          player2: '40'
        },
        games: {
          player1: 5,
          player2: 0
        },
        sets: {
          player1: 1,
          player2: 0
        }
      }
    )
    store = createStore(tennisApp, matchPoint)

    //act
    store.dispatch(scorePoint('player1'))

    //assert
    expect(getWinner()).not.toBeNull()
    expect(getWinner()).toEqual('player1')
  })
})

describe('reset score', () => {
  it('should reset the score to 0 for both players', () => {
    //arrange
    const matchPoint = Object.assign(
      {},
      initialState,
      {
        currentScore: {
          player1: 'adv',
          player2: '40'
        },
        games: {
          player1: 5,
          player2: 0
        },
        sets: {
          player1: 1,
          player2: 0
        }
      }
    )
    store = createStore(tennisApp, matchPoint)

    //act
    store.dispatch(resetScore())

    //assert
    expect(getState()).toEqual(initialState)
  })
})

describe('update name', () => {
  it('should update the player name to the new value', () => {
    //arrange
    store = createStore(tennisApp, initialState)

    //act
    store.dispatch(updateName('player1', 'Alex'))

    //assert
    expect(getState().displayNames.player1).toEqual('Alex')
  })
})
