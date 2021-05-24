import React from 'react';
import './Referee.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScore } from '../../slices/ScoreSlice';
import { setComputerHand, setUserHand } from '../../slices/GameSlice';

function Referee() {
  const userHand = useSelector((state) => state.game.userHand);
  const compHand = useSelector((state) => state.game.computerHand);
  const [result, setResult] = useState('YOU LOSE');

  const dispatch = useDispatch();

  const win = () => {
    if (userHand === 'paper' && compHand === 'rock') {
      setResult('YOU WIN');
      dispatch(setScore(1));
    } else if (userHand === 'rock' && compHand === 'scissors') {
      setResult('YOU WIN');
      dispatch(setScore(1));
    } else if (userHand === 'scissors' && compHand === 'paper') {
      setResult('YOU WIN');
      dispatch(setScore(1));
    } else if (userHand === compHand) {
      setResult('DRAW');
    }
  };

  useEffect(() => {
    win();
  }, []);

  return (
    <div className="referee">
      <h1>{result}</h1>
      <button
        onClick={() => {
          dispatch(setComputerHand(''));
          dispatch(setUserHand(''));
        }}
      >
        Play Again
      </button>
    </div>
  );
}

export default Referee;
