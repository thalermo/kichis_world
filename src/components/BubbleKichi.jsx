// import welcome from "./bubble_texts/welcome_text";
import './bubbles.css';
import React, { useState, useEffect } from 'react';

function BubbleKichi(props) {
  const [counter, setCounter] = useState(0);
  // const [indexCounter, setIndexCounter] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // const handleClick = () => {
  //   setIndexCounter(indexCounter + 1);
  //   console.log('click');
  // };

  // (render)
  return (
    <div className="bubble_speech_bg">
      {counter < 2 && (
        <div className="type_effect">{props.text[counter].phrase}</div>
      )}

      {props.indexCounter >= 2 && (
        <div className="type_effect">
          {props.text[props.indexCounter].phrase}
        </div>
      )}
    </div>
  );
}

export default BubbleKichi;
