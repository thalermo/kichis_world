import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// script js file with array and objects
import welcome from './bubble_texts/welcome_text';
// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './assets/BubbleKichi';
// just the figure with click function
import Kichi from './assets/Kichi';
// the btns components
import { Exit, MinusButton, PlusButton, Tasuku } from './assets/Buttons';
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

  let localEntry = JSON.parse(localStorage.getItem('users'));
  let currentUserEntry = localStorage.getItem('currentUser');

  //getting just number
  let index = localEntry.findIndex(
    (element) => element.email === currentUserEntry
  );

  let task = localEntry[index].task;
  let userName = localEntry[index].userName;
  console.log(task, userName);

  //! clicking on the figure will iterating the text array
  const handleFigureClick = () => {
    setIndexCounter(indexCounter + 1);
  };

  const handleClick = () => {
    setStatus('tasuku');
    navigate('/todo');
  };

  const handleComplete = () => {
    alert("you complete your Tasuku! I'm so proud of you" + userName);
  };

  const handleFailed = () => {
    alert(userName + "This time you didn't completed the Tasuku:/");
  };

  const handleLogOut = () => {
    alert('See you later');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <div className="stage">
      <Exit action={handleLogOut} />
      {task === '' && (
        <BubbleKichi text={welcome} indexCounter={indexCounter} />
      )}
      {task === '' && (
        <div className="bubble_speech--dash">
          <div className="type_effect--dash">
            Kanken! Click on the Tasuku button...
          </div>
        </div>
      )}

      {task !== '' && (
        <div className="bubble_speech--dash">
          <div className="type_effect--dash">{`${userName.toUpperCase()} Your Daily Tasuku: ${task.toUpperCase()}`}</div>
        </div>
      )}

      <div className="figure-btns-wrapper">
        <MinusButton action={handleFailed} />
        <Kichi action={handleFigureClick} />
        <PlusButton action={handleComplete} />
      </div>
      {/* // display or hide the button  */}
      {task === '' ? <Tasuku action={handleClick} /> : null}
    </div>
  );
};

export default Dashboard;
