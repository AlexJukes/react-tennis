import {scorePoint} from '../src/scoreCalculator.js'

const initialScore = {player1: '0', player2: '0'}

describe('scoreIncrease', () => {

  it('increases the score for the specified player correctly', () => {
    //arrange
    const player1Scored = {player1: '15', player2: '0'}
    const player2Scored = {player1: '0', player2: '15'}

    //act and assert
    expect(scorePoint('player1', initialScore)).toEqual(player1Scored)
    expect(scorePoint('player2', initialScore)).toEqual(player2Scored)
  });

  it('calculates basic scoring correctly', () => {
    //arrange
    const firstPoint = {player1: '15', player2: '0'}
    const secondPoint = {player1: '30', player2: '0'}
    const thirdPoint = {player1: '40', player2: '0'}

    //act and assert
    expect(scorePoint('player1', initialScore)).toEqual(firstPoint)
    expect(scorePoint('player1', firstPoint)).toEqual(secondPoint)
    expect(scorePoint('player1', secondPoint)).toEqual(thirdPoint)
  });

  it('gives advantage to the player who scored if players are tied on deuce', () => {
    //arrange
    const deuce = {player1: '40', player2: '40'}
    const advantagePlayer1 = {player1: 'adv', player2: '40'}
    const advantagePlayer2 = {player1: '40', player2: 'adv'}

    //act and assert
    expect(scorePoint('player1', deuce)).toEqual(advantagePlayer1)
    expect(scorePoint('player2', deuce)).toEqual(advantagePlayer2)
  })

  it('returns the score to deuce if the player without an advantage scores', () => {
    //arrange
    const advantagePlayer1 = {player1: 'adv', player2: '40'}
    const advantagePlayer2 = {player1: '40', player2: 'adv'}
    const deuce = {player1: '40', player2: '40'}

    //act and assert
    expect(scorePoint('player1', advantagePlayer2)).toEqual(deuce)
    expect(scorePoint('player2', advantagePlayer1)).toEqual(deuce)
  })

});