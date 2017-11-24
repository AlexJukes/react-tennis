import {addScore} from '../src/scoreCalculator.js'
import {DECLARE_WINNER} from '../src/actions'

const initialScore = {player1: '0', player2: '0'}

describe('scoreIncrease', () => {

  it('increases the score for the specified player correctly', () => {
    //arrange
    const player1Scored = {player1: '15', player2: '0'}
    const player2Scored = {player1: '0', player2: '15'}

    //act and assert
    expect(addScore('player1', initialScore)).toEqual(player1Scored)
    expect(addScore('player2', initialScore)).toEqual(player2Scored)
  });

  it('calculates basic scoring correctly', () => {
    //arrange
    const firstPoint = {player1: '15', player2: '0'}
    const secondPoint = {player1: '30', player2: '0'}
    const thirdPoint = {player1: '40', player2: '0'}

    //act and assert
    expect(addScore('player1', initialScore)).toEqual(firstPoint)
    expect(addScore('player1', firstPoint)).toEqual(secondPoint)
    expect(addScore('player1', secondPoint)).toEqual(thirdPoint)
  });

  it('gives advantage to the player who scored if players are tied on deuce', () => {
    //arrange
    const deuce = {player1: '40', player2: '40'}
    const advantagePlayer1 = {player1: 'adv', player2: '40'}
    const advantagePlayer2 = {player1: '40', player2: 'adv'}

    //act and assert
    expect(addScore('player1', deuce)).toEqual(advantagePlayer1)
    expect(addScore('player2', deuce)).toEqual(advantagePlayer2)
  })

  it('returns the score to deuce if the player without an advantage scores', () => {
    //arrange
    const advantagePlayer1 = {player1: 'adv', player2: '40'}
    const advantagePlayer2 = {player1: '40', player2: 'adv'}
    const deuce = {player1: '40', player2: '40'}

    //act and assert
    expect(addScore('player2', advantagePlayer1)).toEqual(deuce)
    expect(addScore('player1', advantagePlayer2)).toEqual(deuce)
  })
});

describe('winning the game', () => {

  it('should declare the winner of the game', () => {
    // arrange
    const finalPoint = {player1: '40', player2: '0'}
    const winAction = { type: DECLARE_WINNER, winner: 'player1' }

    //act
    expect(addScore('player1', finalPoint)).toEqual(winAction)
  });

});
