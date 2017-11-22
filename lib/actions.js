'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePlayer1Score = updatePlayer1Score;
exports.updatePlayer2Score = updatePlayer2Score;
exports.resetScore = resetScore;
exports.declareWinner = declareWinner;
const UPDATE_PLAYER_1_SCORE = exports.UPDATE_PLAYER_1_SCORE = 'UPDATE_PLAYER_1_SCORE';
const UPDATE_PLAYER_2_SCORE = exports.UPDATE_PLAYER_2_SCORE = 'UPDATE_PLAYER_2_SCORE';
const RESET_GAME = exports.RESET_GAME = 'RESET_GAME';
const DECLARE_WINNER = exports.DECLARE_WINNER = 'DECLARE_WINNER';

function updatePlayer1Score(currentScore) {
  return { type: UPDATE_PLAYER_1_SCORE, currentScore };
}

function updatePlayer2Score(currentScore) {
  return { type: UPDATE_PLAYER_2_SCORE, currentScore };
}

function resetScore() {
  return { type: RESET_GAME };
}

function declareWinner(player) {
  return { type: DECLARE_WINNER, winner: player };
}