import './Contest.css';
import Referee from '../referee/Referee';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComputerHand } from '../../slices/GameSlice';

const hands = ['rock', 'paper', 'scissors'];

function Contest() {
  const compHand = useSelector((state) => state.game.computerHand);
  const userHand = useSelector((state) => state.game.userHand);
  const [timer, setTimer] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    setTimeout(() => dispatch(setComputerHand(cpHand)), 500);
    setTimeout(() => setTimer(true), 1200);
  }, []);

  return (
    <div className="contest">
      <div className="contest__container">
        <div className="contest__handContainer">
          <h1>You Picked</h1>
          <img
            src={`/images/icon-${userHand}.svg`}
            alt="Image of hand user played"
          />
        </div>
        {timer && <Referee />}
        <div className="contest__handContainer">
          <h1>The House Picked</h1>
          <img
            src={`/images/icon-${compHand ? compHand : 'blank'}.svg`}
            alt="Image of hand user played"
          />
        </div>
      </div>
    </div>
  );
}

export default Contest;
