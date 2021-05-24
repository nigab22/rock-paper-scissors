import React from 'react';
import Hand from '../hand/Hand';
import './Hands.css';
import { useSelector } from 'react-redux';

function Hands() {
  const hand = useSelector((state) => state.game.userHand);
  return (
    <div className="hands">
      <div className="hands__triangle">
        <img src="/images/bg-triangle.svg" alt="" />
      </div>
      <div className="hands__top">
        <Hand value="paper" />
        <Hand value="scissors" />
      </div>
      <div className="hands__bottom">
        <Hand value="rock" />
      </div>
    </div>
  );
}

export default Hands;
