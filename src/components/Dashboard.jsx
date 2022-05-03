import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// script js file with array and objects
import welcome from './bubble_texts/welcome_text';

// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './assets/BubbleKichi';

// just the figure with click function
import Kichi from './assets/Kichi';

// the btns components
import { MinusButton, PlusButton, Tasuku } from './assets/Buttons';

// CSS files:
import './Dashboard.css';

const Dashboard = () => {
  // state for iteration the welcome_text array
  const navigate = useNavigate();
  const [indexCounter, setIndexCounter] = useState(1);
  //const [status, setStatus] = useState('');
  //console.log(status);
  const [status, setStatus] = useState('');

  // info state, to get inputs from the user

  // useEffect(() => {
  //   setInterval(() => setShow(true), 5000);
  // }, []);

  //! ADD at the end of the project to avoid an access from ppl
  //const navigate = useNavigate();
  // useEffect(() => {
  //   const loggedIn = localStorage.getItem('loggedIn');
  //   console.log(loggedIn);
  //   if (loggedIn !== 'yes') {
  //     navigate('/');
  //   }
  // }, []);

  //! clicking on the figure will iterating the text array
  const handleFigureClick = () => {
    setIndexCounter(indexCounter + 1);
  };

  const handleClick = () => {
    setStatus('tasuku');
    navigate('/todo');
  };

  return (
    <div className="stage">
      {status === '' && (
        <BubbleKichi text={welcome} indexCounter={indexCounter} />
      )}

      {status === 'tasuku' && (
        <div className="bubble_speech--dash">
          <div className="type_effect--dash">
            Kanken! Click on the Tasuku button...
          </div>
        </div>
      )}
      <div className="figure-btns-wrapper">
        <MinusButton />
        <Kichi action={handleFigureClick} />
        <PlusButton />
      </div>
      <Tasuku action={handleClick} />
    </div>
  );
};

export default Dashboard;
