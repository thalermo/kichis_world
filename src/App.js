import React, { useEffect, useState } from 'react';
// script js file with array and objects
import welcome from './components/bubble_texts/welcome_text';
// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from './components/BubbleKichi';
//import BubbleUser from './components/BubbleUser';
// just the figure with click function
import Kichi from './components/Kichi';
import { SelectButton, su, SubmitBtn } from './components/Buttons';

//import FirstPage from './components/FirstPage';

// CSS files:
import './App.css';

//import { StartButton, PlusButton, SelectButton } from './components/Buttons';

function App() {
  // state for iteration the welcome_text array
  const [indexCounter, setIndexCounter] = useState(1);
  //const [show, setShow] = useState(false);

  // info state, to get inputs from the user

  // useEffect(() => {
  //   setInterval(() => setShow(true), 5000);
  // }, []);

  // clicking on teh figure will iterating the text array
  // const handleFigureClick = () => {
  //   setIndexCounter(indexCounter + 1);
  //   setUserInfo({ ...userInfo, user: '' });
  // };

  const handleFigureClick = () => {
    setIndexCounter(indexCounter + 1);
    console.log('click');
    console.log(indexCounter);
  };

  return (
    <div className="App">
      <div className="stage">
        {/* <h1>The component has been rendered for {count} seconds</h1> */}
        <BubbleKichi text={welcome} indexCounter={indexCounter} />
        <Kichi action={handleFigureClick} />

        <SubmitBtn />
      </div>
    </div>
  );
}

export default App;
