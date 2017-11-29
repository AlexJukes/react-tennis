import { createStore } from 'redux'
import { scorePoint, resetScore } from '../src/actions'
import tennisApp from '../src/reducers'

const initialState = {
  score: {
    player1: '0',
    player2: '0'
  },
  winner: null
}

const deuce = Object.assign(
  {},
  initialState,
  {
    score: {
      player1: '40',
      player2: '40'}
  }
)

const advantagePlayer1 = Object.assign(
  {},
  initialState,
  {
    score: {
      player1: 'adv',
      player2: '40'
    }
  }
)

const player1Win = Object.assign(
  {},
  initialState,
  {
    winner: 'player1'
  }
)

let store
let getState
let getPlayer1Score
let getPlayer2Score
let getWinner

beforeEach(() => {
  store = createStore(tennisApp, initialState)
  getState = () => store.getState()
  getPlayer1Score = () => getState().score.player1
  getPlayer2Score = () => getState().score.player2
  getWinner = () => getState().winner
})

describe('scoreIncrease', () => {

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
    store = createStore(tennisApp, deuce)

    //act
    store.dispatch(scorePoint('player1'))

    //assert
    expect(getPlayer1Score()).toEqual('adv')
    expect(getPlayer2Score()).toEqual('40')
  })

  it('returns the score to deuce if the player without an advantage scores', () => {
    //arrange
    store = createStore(tennisApp, advantagePlayer1)

    //act
    store.dispatch(scorePoint('player2'))

    //assert
    expect(getPlayer1Score()).toEqual('40')
    expect(getPlayer2Score()).toEqual('40')
  })

  it('should declare the winner of the game', () => {
    //arrange
    store = createStore(tennisApp, advantagePlayer1)

    //act
    store.dispatch(scorePoint('player1'))

    //assert
    expect(getWinner()).toEqual('player1')
  });

describe('reset score', () => {
  it('should reset the score to 0 for both players', () => {
    //arrange
    store = createStore(tennisApp, advantagePlayer1)

    //act
    store.dispatch(resetScore())

    //assert
    expect(getState()).toEqual(initialState)
  })
})
