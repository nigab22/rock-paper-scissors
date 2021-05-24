import React from 'react';
import { useState } from 'react';
import './Rules.css';

function Rules() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="rules">
      <div
        className="rules__text"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Rules
      </div>
      <div
        onClick={() => {
          setDisplay(!display);
        }}
        className={`rules__imageContainer ${display && 'rules__display'}`}
      >
        <div className="rules__imageTop">
          <div className="rules__imageTitle">Rules</div>
          <img
            className="rules__imageClose"
            src="/images/icon-close.svg"
            alt="Icon to close game rules"
          />
        </div>
        <img
          className="rules__image"
          src="/images/image-rules.svg"
          alt="Image of game rules"
        />
      </div>
    </div>
  );
}

export default Rules;
