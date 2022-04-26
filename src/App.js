import React, { useEffect, useState } from 'react';
// script js file with array and objects
//import welcome from './components/bubble_texts/welcome_text';
// figure bubble speech above and user bubble underneath the figure
//import BubbleKichi from './components/BubbleKichi';
//import BubbleUser from './components/BubbleUser';
// just the figure with click function
//import Kichi from './components/Kichi';
import FirstPage from './components/FirstPage';
import IntroPage from './components/IntroPage';

// CSS files:
import './App.css';
import './components/Buttons.css';
//import { StartButton, PlusButton, SelectButton } from './components/Buttons';

function App() {
  // state for iteration the welcome_text array
  const [indexCounter, setIndexCounter] = useState(0);
  const [show, setShow] = useState(false);
  // info state, to get inputs from the user

  useEffect(() => {
    setInterval(() => setShow(true), 5000);
  }, []);

  // clicking on teh figure will iterating the text array
  // const handleFigureClick = () => {
  //   setIndexCounter(indexCounter + 1);
  //   setUserInfo({ ...userInfo, user: '' });
  // };

  // const handleClick = () => {
  //   setIndexCounter(indexCounter + 1);
  // };

  return (
    <div className="App">
      <FirstPage />
    </div>
  );
}

export default App;
