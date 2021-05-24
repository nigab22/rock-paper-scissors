import React from 'react';
import './ScoreBoard.css';
import { useSelector } from 'react-redux';

function ScoreBoard() {
  const score = useSelector((state) => state.score);
  return (
    <div className="scoreboard">
      <div className="scoreboard__gameName">
        <img src="/images/logo.svg" alt="rock paper scissors logo" />
      </div>
      <div className="scoreboard__score">
        <p>Score</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
