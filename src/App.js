import React, { useEffect, useState } from 'react';
// script js file with array and objects
import welcome from './components/bubble_texts/welcome_text';
// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './components/BubbleKichi';
import BubbleUser from './components/BubbleUser';
// just the figure with click function
import Kichi from './components/Kichi';

// CSS files:
import './App.css';
import './components/Buttons.css';
//import { StartButton, PlusButton, SelectButton } from './components/Buttons';

function App() {
  // state for iteration the welcome_text array
  const [indexCounter, setIndexCounter] = useState(0);
  const [show, setShow] = useState(false);
  // info state, to get inputs from the user
  const [userInfo, setUserInfo] = useState({
    id: '',
    user: '',
    task: '',
    time: '',
  });

  useEffect(() => {
    setTimeout(() => setShow(true), 10000);
  }, []);

  // clicking on teh figure will iterating the text array
  // const handleFigureClick = () => {
  //   setIndexCounter(indexCounter + 1);
  //   setUserInfo({ ...userInfo, user: '' });
  // };

  const handleClick = () => {
    setIndexCounter(indexCounter + 1);
    setUserInfo({ ...userInfo, user: '' });
  };

  return (
    <div className="App">
      {/* the background of the figure = div className stage  */}
      <div className="stage">
        {/* upper bubble text, figure text component */}

        <BubbleKichi currentIndex={indexCounter} text={welcome} />

        {setTimeout(() => {
          <h1>Hello</h1>;
        }, 2000)}
        {/* figure component */}
        {/* <Kichi action={handleFigureClick} /> */}
        {show && (
          <button className="continue" onClick={handleClick}>
            Click to continue
          </button>
        )}
        {/* user input component */}

        <BubbleUser
          action={indexCounter}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        {/* stage div  */}
      </div>
      {/* app div  */}
    </div>
  );
}

export default App;
