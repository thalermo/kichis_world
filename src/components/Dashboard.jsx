import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// script js file with array and objects
import welcome from './bubble_texts/welcome_text';
// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './assets/BubbleKichi';
// just the figure with click function
import Kichi from './assets/Kichi';
// the btns components
import { MinusButton, PlusButton, Tasuku, TurnonBtn } from './assets/Buttons';
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
  let currentUserHP = localEntry[index].hp;
  let now = localEntry[index].time;
  let taskTime = localEntry[index].timeStamp;
  //console.log(task, userName, currentUserHP);
  const [hpValue, SetHpValue] = useState(currentUserHP);
  //console.log(currentUserHP);
  console.log(now, taskTime);

  //taskTime = '2001-3-4';
  //* the logic of the show Tasuku btn, if the task is empty and also if the day is over. check line 167 🫡

  if (now !== taskTime) {
    localEntry[index] = {
      ...localEntry[index],
      task: '',
    };
    localStorage.setItem('users', JSON.stringify(localEntry));
  }

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
    currentUserHP++;
    //alert(currentUserHP);
    //SetHpValue(currentUserHP + 1);
    //currentUserHP++;
    if (currentUserHP >= 5) {
      alert('start🌟');
    } else if (currentUserHP === 4) {
      alert('Arigatō, but keep it up');
    } else if (currentUserHP === 3) {
      alert("I feel better, I'm still mad 🧐");
    } else if (currentUserHP === 2) {
      alert("you saved me, but I'm still sick. Keep going ");
    } else if (currentUserHP === 1) {
      alert("I'm dying, MAYDAY!");
    } else alert('GAME OVER');

    localEntry[index] = {
      ...localEntry[index],
      hp: currentUserHP,
    };
    localStorage.setItem('users', JSON.stringify(localEntry));
    SetHpValue(currentUserHP);
  };

  const handleFailed = () => {
    alert(userName + "This time you didn't completed the Tasuku:/");
    // SetHpValue(currentUserHP - 1);
    currentUserHP--;
    if (currentUserHP >= 5) {
      alert('start🌟');
    } else if (currentUserHP === 4) {
      alert('behave please ☝️');
    } else if (currentUserHP === 3) {
      alert("i'm so mad 😡");
    } else if (currentUserHP === 2) {
      alert("i'm so sick 🤢 ");
    } else if (currentUserHP === 1) {
      alert("i'm dying, MAYDAY!");
    } else alert('GAME OVER');

    localEntry[index] = {
      ...localEntry[index],
      hp: Number(currentUserHP),
    };
    localStorage.setItem('users', JSON.stringify(localEntry));
    SetHpValue(currentUserHP);
  };

  const handleLogOut = () => {
    alert('See you later');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <div className="stage">
      <div className="top-stage">{/* <Exit action={handleLogOut} /> */}</div>
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

        <Kichi
          hpValue={hpValue}
          // SetHpValue={SetHpValue}
          action={handleFigureClick}
        />
        <PlusButton action={handleComplete} />
        <TurnonBtn action={handleLogOut} />
      </div>
      {/* // display or hide the button  */}
      {task === '' ? <Tasuku action={handleClick} /> : null}
    </div>
  );
};

export default Dashboard;
