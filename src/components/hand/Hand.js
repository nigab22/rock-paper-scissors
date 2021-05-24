import React from 'react';
import './Hand.css';
import { useDispatch } from 'react-redux';
import { setUserHand } from '../../slices/GameSlice';

function Hand({ value }) {
  const dispatch = useDispatch();

  const pickHand = (e, value) => {
    console.log('event...', e);
    console.log('value...', value);
    dispatch(setUserHand(value));
  };

  return (
    <div className="hand" onClick={(e) => pickHand(e, value)}>
      <img src={`/images/icon-${value}.svg`} />
    </div>
  );
}

export default Hand;
